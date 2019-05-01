const store = require('../store')

const signUpSuccess = function (data) {
  $('.show-message').text('Successfully Signed Up!').show()
  $('.show-message').hide(2000)
  $('#sign-up').hide()
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.show-message').text('Sign Up Failed').show()
  $('.show-message').hide(2000)
  $('#get-recipes').hide()
  $('#create-recipe').hide()
  $('#change-recipe').hide()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.show-message').text('Welcome! Please enjoy my recipes! Everyone is welcome to add your own recipes here!').show()
  $('.show-message').hide(9000)
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('form').trigger('reset')
  $('#get-recipes').show()
  $('#create-recipe').show()
  $('#change-recipe').show()
}

const signInFailure = function (data) {
  $('.show-message').text('Sign In Failed').show()
  $('.show-message').hide(2000)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('form').trigger('reset')
}

const changePwSuccess = function () {
  $('.show-message').text('Successfully changed your password!').show()
  $('.show-message').hide(2000)
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('.show-message').text('Change password failed!').show()
  $('.show-message').hide(2000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.show-message').text('Thank you for using my app! ').show()
  $('.show-message').hide(3500)
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('form').trigger('reset')
  $('#get-recipes').hide()
  $('#create-recipe').hide()
  $('#change-recipe').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('.show-message').text('Sign out failed!').show()
  $('.show-message').hide(2000)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure

}
