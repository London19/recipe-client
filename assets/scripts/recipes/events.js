'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('./store')

const getRecipes = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}
const createRecipes = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createRecipes(data)
    .then(ui.createRecipesSuccess)
    .catch(ui.createRecipesFailure)
}
const changeRecipes = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changeRecipes(data)
    .then(ui.changeRecipesSuccess)
    .then(() => getRecipes(event))
    .catch(ui.changeRecipesFailure)
}
const deleteRecipes = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipes(id)
    .then(ui.deleteRecipesSuccess)
    .then(() => getRecipes(event))
    .catch(ui.deleteRecipesFailure)
}

const addHandlers = function () {
  $('#get-recipes').on('click', getRecipes)
  $('#create-recipe').on('submit', createRecipes)
  $('#change-recipe').on('submit', changeRecipes)
  $('#content').on('click', '.delete-recipe', deleteRecipes)
}

module.exports = {
  addHandlers
}
