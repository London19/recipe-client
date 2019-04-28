const config = require('../config.js')
// const store = require('./store')

const getRecipes = function (id) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET'
  })
}

module.exports = {
  getRecipes
}
