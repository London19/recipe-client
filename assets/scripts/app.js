'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const recipeEvents = require('./recipes/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  recipeEvents.addHandlers()
  authEvents.addHandlers()
  // $('#get-recipes').on('click', events.getRecipe)
  // $('.peppa-pig').on('click', events.getPeppaPig)
  // $('.baby-shark').on('click', events.getBabyShark)
})
