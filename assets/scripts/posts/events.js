'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetPosts = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  if (data.post.title) {
    api.searchPosts(data.post)
      .then(ui.indexSuccess)
      .catch(ui.failure)
  } else {
    api.index()
      .then(ui.indexSuccess)
      .catch(ui.failure)
  }
}

const onShowPost = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  let id = data.post.id
  api.show(id)
    .then(ui.success)
    .catch(ui.failure)
}

const onCreatePost = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.create(data)
    .then(ui.success)
    .catch(ui.failure)
}

const onUpdatePost = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  let id = event.target.dataset.id
  api.update(data, id)
    .then(ui.success)
    .catch(ui.failure)
}

const onDestroyPost = (event) => {
  event.preventDefault()
  let id = event.target.dataset.id
  api.destroy(id)
    .then(ui.success)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#index-post').on('submit', onGetPosts)
  $('#show-post').on('submit', onShowPost)
  $('#create-post').on('submit', onCreatePost)
  $('.post-content').on('submit', '#edit-post', onUpdatePost)
  $('.post-content').on('click', '.post-destroy', onDestroyPost)
}

module.exports = {
  addHandlers
}
