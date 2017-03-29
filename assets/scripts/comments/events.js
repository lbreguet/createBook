'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetComments = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.failure)
}

const onCreateComment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.success)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.content').on('dblclick', '.index-title', onGetComments)
  $('.content').on('submit', '#create-comment', onCreateComment)
}

module.exports = {
  addHandlers
}
