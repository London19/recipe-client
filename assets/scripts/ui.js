const store = require('./store')

const getSunflowerSuccess = function (data) {
  // $('.sunflower').on('click', getSunflower)
  console.log('succeed')
  console.log(data.recipe)
}

const getSunflowerFailure = function (data) {
  console.log('failed')
}
const signUpSuccess = function (data) {
  console.log('succeed')
}

const signUpFailure = function (data) {
  console.log('failed')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('succeed')
}

const signInFailure = function (data) {
  console.log('failed')
}

const changePwSuccess = function () {
  console.log('succeed')
}

const changePwFailure = function () {
  console.log('failed')
}

const signOutSuccess = function () {
  console.log('succeed')
}

const signOutFailure = function () {
  console.log('failed')
}

module.exports = {
  getSunflowerSuccess,
  getSunflowerFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
  // getSunflower

}
