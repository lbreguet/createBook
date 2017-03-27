'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetPosts = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.searchPosts(data.post)
    .then(ui.indexSuccess)
    .catch(ui.failure)
}

const onMenu = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.failure)
}

const onShowPost = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.show(id)
    .then(ui.showSuccess)
    .catch(ui.failure)
}

const onCreatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.success)
    .catch(ui.failure)
}

const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.update(data, id)
    .then(ui.success)
    .then(onShowPost(event))
    .catch(ui.failure)
}

const onDestroyPost = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.destroy(id)
    .then(ui.success)
    .then(onMenu(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.menu').on('click', onMenu)
  $('#index-post').on('submit', onGetPosts)
  $('.content').on('dblclick', '.index-title', onShowPost)
  $('#create-post').on('submit', onCreatePost)
  $('.content').on('submit', '#edit-post', onUpdatePost)
  $('.content').on('click', '.post-destroy', onDestroyPost)
}

module.exports = {
  addHandlers
}
