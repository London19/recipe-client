// const store = require('./store')
const showRecipesTemplate = require('../templates/recipes-listing.handlebars')

const getRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('#change-recipe').trigger('reset')
}

const clearRecipes = () => {
  $('.content').empty()
}

const getRecipesFailure = (error) => {
  console.error(error)
}

const createRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('#create-recipe').trigger('reset')
}

const createRecipesFailure = (error) => {
  console.error(error)
}

const changeRecipesSuccess = () => {
  $('#change-recipe').trigger('reset')
}

const changeRecipesFailure = (error) => {
  console.error(error)
}

const deleteRecipesSuccess = (data) => {
  $('.content').empty()
}

const deleteRecipesFailure = (error) => {
  console.error(error)
}

module.exports = {
  getRecipesSuccess,
  getRecipesFailure,
  showRecipesTemplate,
  clearRecipes,
  createRecipesSuccess,
  createRecipesFailure,
  changeRecipesSuccess,
  changeRecipesFailure,
  deleteRecipesSuccess,
  deleteRecipesFailure

}
