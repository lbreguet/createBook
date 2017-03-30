'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateComment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.create(data, id)
    .then(ui.createSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('.content').on('submit', '#create-comment', onCreateComment)
}

module.exports = {
  addHandlers
}
