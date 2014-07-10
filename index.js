var _ = require('lodash')
  , crypto = require('crypto')
  , Promise = require('bluebird')
  , randomColor =require('randomcolor')
  , Random = require('random-js')
  , r = new Random()
  , fs = require('fs-extra')
  , Canvas = require('canvas')

function md5 (data) {
  return crypto.createHash('md5').update(data, 'utf8').digest('hex')
}

function generateText (canvas, textLength, pool, dummy) {
  var ctx = canvas.getContext('2d')
    , text = r.string(dummy ? textLength + 1 : textLength, pool)
    , tmp = ''
    , textFullWidth = ctx.measureText(text).width
    , startPosX = (canvas.width - textFullWidth) / 2
    , startPosY = canvas.height / 2
    , hasDummy = false
    , code = ''

  for (var i = 0, len = text.length; i < len; i++) {
    var textMetrics = ctx.measureText(tmp) || {}
      , character = text.charAt(i)

    tmp += character

    if (dummy && hasDummy === false && (i + 1 === len || r.bool())) {
      ctx.fillStyle = '#f00'
      hasDummy = true
    } else {
      ctx.fillStyle = randomColor({ luminosity: 'dark', hue: 'blue' })
      code += character
    }

    ctx.fillText(character, Math.abs(startPosX + textMetrics.width), startPosY)
  }

  return code
}

function generateNoise (canvas) {
  var ctx = canvas.getContext('2d')
    , i = 11

  while (i--) {
    var loop = 11
      , x = r.real(0, canvas.width)
      , y = r.real(0, canvas.height)

    ctx.beginPath()
    ctx.moveTo(x, y)

    while (loop--) {
      ctx.lineTo(x + r.real(-20, 20), y + r.real(-20, 20))
    }
    ctx.strokeStyle = randomColor({ luminosity: 'light', format: 'rgb' }).replace(/rgb\((.*)\)/, 'rgba($1,' + r.real(0.25, 0.75) + ')')
    ctx.stroke()
  }
}

function generate (options) {
  options = _.assign({
    width: 80,
    height: 30,
    fontSize: 22,
    fontFamily: 'Times New Roman',
    textLength: 4,
    backgroundColor: '#fff',
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    dummy: true
  }, options)

  var canvas = new Canvas(options.width, options.height)
    , ctx = canvas.getContext('2d')
    , code

  ctx.fillStyle = options.backgroundColor
  ctx.fillRect(0, 0, options.width, options.height)

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = options.fontSize + 'px ' + options.fontFamily

  generateNoise(canvas)

  code = generateText(canvas, options.textLength, options.pool, !!options.dummy)

  return {
    code: code,
    canvas: canvas
  }
}

module.exports = function (options) {
  _.isPlainObject(options) || (options = {})

  var outputDir = (options.outputDir || process.cwd()) + '/.captchar/'

  return new Promise(function (resolve, reject) {
    var img = generate(options)

    if (options.format === 'datauri') {
      img.canvas.toDataURL(function (err, str) {
        err ? reject(err) : resolve({
          src: str,
          code: img.code
        })
      })
    } else if (options.format === 'stream') {
      var result = { code: img.code }

      Object.defineProperty(result, 'src', {
        enumerable: true,
        get: function () {
          return img.canvas.pngStream()
        }
      })

      resolve(result)
    } else {
      var path = outputDir + (options.imageName || md5(Date.now().toString())) + '.png'

      img.canvas.toBuffer(function (err, data) {
        if (err) {
          return reject(err)
        }

        fs.outputFile(path, data, function (err) {
          err ? reject(err) : resolve({
            src: path,
            code: img.code
          })
        })
      })
    }
  })
}
