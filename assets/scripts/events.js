const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const addHandlers = function () {
  $('.sunflower').on('click', getSunflower)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

const getSunflower = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.getSunflower(data)
    .then(data => {
      ui.getSunflowerSuccess(data)
    })
    .catch(ui.getSunflowerFailure)
}

// const showDate = function () {
// loadJSON("http://localhost:4741/recipes", gotData, 'jsonp')
// }

// const gotData = function (data) {
// printLine(data)
// }

// const recipeChoose = document.querySelector('section')
// const recipeDisplay = document.querySelector('pre')

// recipeChoose.onchange = function () {
// const recipe = recipeChoose.value
// updateDisplay(recipe)
// }

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  addHandlers,
  getSunflower
}
