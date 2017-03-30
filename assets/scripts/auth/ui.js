'use strict'

const signUpTemplate = require('../templates/auth/sign-up.handlebars')

const changePasswordTemplate = require('../templates/auth/change-password.handlebars')

const signUpShow = () => {
  const signUpHtml = signUpTemplate()
  $('.auth').empty().append(signUpHtml)
  $('#sign-in').hide()
}

const signUpSuccess = () => {
  $('.signup-email').val('')
  $('.signup-password').val('')
  $('.sign-up').hide()
  $('.auth').empty()
  $('#sign-in').show()
  $('.auth-message').text('Successfully signed up!').css('color', 'green').show(0).delay(1000).fadeOut(500)
}

const signUpFailure = () => {
  $('.auth-message').text('This user already exists. Please choose another email.').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

const signInShow = () => {
  $('#sign-in').show()
  $('.auth').empty()
}

const signInSuccess = () => {
  $('.sign-up').hide()
  $('.signup-email').val('')
  $('.signup-password').val('')
  $('.signin-email').val('')
  $('.signin-password').val('')
  $('#sign-in').hide()
  $('.signup-email').val('')
  $('.signup-password').val('')
  $('.change-password').show()
  $('#sign-out').show()
  $('.auth-message').text('Successfully signed in!').css('color', 'green').show(0).delay(1000).fadeOut(500)
  $('.create-container').show()
  $('.content').show()
  $('#index-post').show()
  $('.auth').empty()
}

const signInFailure = () => {
  $('.auth-message').text('The email and/or password do not match with existing user. Try Again.').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

const changePasswordShow = () => {
  const changePasswordHtml = changePasswordTemplate()
  $('.auth').empty().append(changePasswordHtml)
}

const changePasswordSuccess = () => {
  $('.auth').empty()
  $('.new-password').val('')
  $('.old-password').val('')
  $('.auth-message').text('Password has been successfully updated!').css('color', 'green').show(0).delay(1000).fadeOut(500)
}

const changePasswordFailure = () => {
  $('.auth-message').text('Type in the password associated with this account!').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

const signOutSuccess = () => {
  $('#sign-out').hide()
  $('.change-password').hide()
  $('#sign-in').show()
  $('.sign-up').show()
  $('.signup-email').val('')
  $('.signup-password').val('')
  $('.new-password').val('')
  $('.old-password').val('')
  $('.auth-message').text('You signed out. Hope to see you soon!').css('color', 'green').show(0).delay(1000).fadeOut(500)
  $('.signup-email').val('')
  $('.signup-password').val('')
  $('.signin-email').val('')
  $('.signin-password').val('')
  $('.content').empty()
  $('.auth').empty()
  $('.create-container').hide()
  $('#index-post').hide()
}

const signOutFailure = () => {
  $('.auth-message').text('There was a problem trying to sign you out. Try again!').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

module.exports = {
  signUpShow,
  signUpSuccess,
  signUpFailure,
  signInShow,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordShow,
  changePasswordSuccess,
  changePasswordFailure
}
