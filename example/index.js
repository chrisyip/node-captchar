var captchar = require('../')

captchar()
  .then(function(data) {
    console.log(data)
  })

captchar({
    format: 'datauri'
  })
  .then(function(data) {
    console.log(data)
  })

captchar({
    format: 'stream'
  })
  .then(function(data) {
    console.log(data)
  })
