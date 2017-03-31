'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const postApi = require('../posts/api')
const postUi = require('../posts/ui')
const postEvents = require('../posts/events')

const onCreateComment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.create(data, id)
    .then(ui.createSuccess)
    .then(() => postApi.show(id)
      .then(postUi.showSuccess)
      .then(api.index(id)
        .then((data) => ui.indexSuccess(data, id))))
    .catch(ui.failure)
}

const onUpdateComment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.update(data, id)
    .then(ui.updateSuccess)
    .then(() => postApi.show(id)
      .then(postUi.showSuccess)
      .then(api.index(id)
        .then((data) => ui.indexSuccess(data, id))))
    .catch(ui.failure)
}

const onDestroyComment = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.destroy(id)
    .then(ui.success)
    .then(() => postApi.show(id)
      .then(postUi.showSuccess)
      .then(api.index(id)
        .then((data) => ui.indexSuccess(data, id))))
    .catch(ui.failure)
}

const addHandlers = function () {
  $('.content').on('submit', '#create-comment', onCreateComment)
  $('.content').on('submit', '#edit-comment', onUpdateComment)
  $('.content').on('click', '.comment-destroy', onDestroyComment)
}

module.exports = {
  addHandlers
}
