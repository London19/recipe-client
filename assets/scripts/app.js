'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
$(() => {
  events.addHandlers()
  $('.sunflower').on('click', events.sunflower)
  $('.peppa-pig').on('click', events.peppaPig)
  $('.baby-shark').on('click', events.babyShark)
})
