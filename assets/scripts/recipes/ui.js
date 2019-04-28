// const store = require('./store')
const showRecipesTemplate = require('../templates/recipes-listing.handlebars')

const getRecipesSuccess = (data) => {
  console.log(data)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
}

const clearRecipes = () => {
  $('.content').empty()
}

const getRecipesFailure = (error) => {
  console.error(error)
}

module.exports = {
  getRecipesSuccess,
  getRecipesFailure,
  showRecipesTemplate,
  clearRecipes

}
