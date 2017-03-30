'use strict'

const indexCommentTemplate = require('../templates/comments/index-comment.handlebars')

const indexSuccess = function (data, id) {
  const indexCommentHtml = indexCommentTemplate({ comments: data.comments, post_id: id, users: data.users })
  $('.index-comment').empty().append(indexCommentHtml)
}

const createSuccess = (data) => {
  console.log(data)
  $('.clear').val('')
}

const success = function (data) {
  console.log(data)
}

const failure = function (error) {
  console.error(error)
}

module.exports = {
  indexSuccess,
  createSuccess,
  success,
  failure
}
