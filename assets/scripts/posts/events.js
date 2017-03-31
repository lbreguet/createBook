'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const commentsApi = require('../comments/api')
const commentsUi = require('../comments/ui')
const api = require('./api')
const ui = require('./ui')

const onGetPosts = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.searchPosts(data.post)
    .then(ui.indexSuccess)
    // .catch(ui.failure)
}

const onMenu = () => {
  // event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    // .catch(ui.failure)
}

const onShowPost = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.show(id)
    .then(ui.showSuccess)
    .then(() => commentsApi.index(id))
    .then((data) => commentsUi.indexSuccess(data, id))
    // .catch(ui.failure)
}

const onCreatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    // .then(ui.success)
    .then(() => onMenu())
    // .catch(ui.failure)
}

const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.update(data, id)
    .then(ui.updateSuccess)
    .then(() => onMenu())
    // .catch(ui.failure)
}

const onDestroyPost = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.destroy(id)
    // .then(ui.success)
    .then(() => onMenu())
    // .catch(ui.failure)
}

const addHandlers = () => {
  $('.menu').on('click', onMenu)
  $('.content').on('click', '.back-to-menu', onMenu)
  $('#index-post').on('submit', onGetPosts)
  $('.content').on('click', '.index-title', onShowPost)
  $('.create-css').on('click', '.clear-form', ui.clearCreateForm)
  $('.create-css').on('submit', '#create-post', onCreatePost)
  $('.content').on('submit', '#edit-post', onUpdatePost)
  $('.content').on('click', '.post-destroy', onDestroyPost)
}

module.exports = {
  addHandlers
}
