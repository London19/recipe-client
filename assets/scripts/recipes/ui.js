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

const getRecipesFailure = () => {
  $('.show-message').text('Whoops! Something wrong. Please try again!').show()
  $('.show-message').hide(9000)
}

const createRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('#create-recipe').trigger('reset')
}

const createRecipesFailure = () => {
  $('.show-message').text('Whoops! Something wrong. Please try again!').show()
  $('.show-message').hide(9000)
}

const changeRecipesSuccess = () => {
  $('#change-recipe').trigger('reset')
}

const changeRecipesFailure = () => {
  $('.show-message').text('Whoops! You can only update your own recipe!').show()
  $('.show-message').hide(9000)
}

const deleteRecipesSuccess = (data) => {
  $('.content').empty()
}

const deleteRecipesFailure = () => {
  $('.show-message').text('Whoops! You can only delete your own recipe!').show()
  $('.show-message').hide(9000)
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
