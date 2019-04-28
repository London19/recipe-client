'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../lib/get-form-fields.js')
// const store = require('./store')

const getRecipes = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}
const addHandlers = function () {
  $('#get-recipes').on('click', getRecipes)
}

module.exports = {
  addHandlers
}
