'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetPosts = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  if (data.post.title) {
    api.searchPosts(data.post)
      .then(ui.success)
      .catch(ui.failure)
  } else {
    api.index()
      .then(ui.success)
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
  let id = data.post.id
  api.update(data, id)
    .then(ui.success)
    .catch(ui.failure)
}

const onDestroyPost = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  let id = data.post.id
  api.destroy(id)
    .then(ui.success)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#index-post').on('submit', onGetPosts)
  $('#show-post').on('submit', onShowPost)
  $('#create-post').on('submit', onCreatePost)
  $('#update-post').on('submit', onUpdatePost)
  $('#delete-post').on('submit', onDestroyPost)
}

module.exports = {
  addHandlers
}
