const config = require('../config.js')
const store = require('../store')

const getRecipes = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET'
  })
}

const createRecipes = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changeRecipes = function (data) {
  return $.ajax({
    url: config.apiUrl + `/recipes/${data.recipe.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteRecipes = function (id) {
  return $.ajax({
    url: config.apiUrl + `/recipes/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getRecipes,
  createRecipes,
  changeRecipes,
  deleteRecipes
}
