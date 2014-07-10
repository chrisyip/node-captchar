# Captchar

Generate captcha image. Written in Node.js.

## Installation

Node-captchar requires [canvas](https://www.npmjs.org/package/canvas), pleace follow canvas's installation [wiki](https://github.com/LearnBoost/node-canvas/wiki/_pages) to install dependencies.

## Features

- Background noises
- Support dummy character (presented in red color)
- Customizable string pool

## Usage

```js
var captchar = require('captchar')

captchar()
    .then(function (data) {
        console.log(data)
    })
/*
{
    src: '/PATH/TO/PROJECT/.captchar/73f1b787f3f125d8091b3a640343d4de.png,
    code: 'TyK2'
}
 */

captchar({ format: 'datauri' })
    .then(function (data) {
        console.log(data)
    })
/*
{
    src: 'data:image/png',
    code: '5HPp'
}
 */

captchar({ format: 'stream' })
    .then(function (data) {
        console.log(data)
    })
/*
{
    src:
        {
            sync: undefined,
            canvas: [Canvas 80x30],
            readable: true,
            _events: {}
        },
    code: 'jF4i'
}
 */
```

## Options

```js
captchar({
    width: 80,
    height: 30,
    fontSize: 22,
    fontFamily: 'Times New Roman',
    textLength: 4, // dummy character is not included
    backgroundColor: '#fff',
    outputDir: process.cwd()) + '/.captchar/',
    imageName: md5(Date.now().toString())) + '.png', // do not pass .png; recommend to generate image name manually
    format: 'datauri' // 'stream', or output to disk,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    dummy: true // set to `false` to turn dummy off
})
```

Example with default options:

![](http://f.cl.ly/items/133L2t3x1S0a2F1I1i24/Unknown.png)

The real code is `5HPp`, `o` is dummy.

## Contributors

- [Chris Yip](https://github.com/chrisyip/node-captchar/commits/master?author=chrisyip)
