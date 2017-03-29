'use strict'

const indexCommentTemplate = require('../templates/comments/index-comment.handlebars')

const indexSuccess = function (data) {
  console.log(data)
  const indexCommentHtml = indexCommentTemplate({ comments: data.comments })
  $('.index-comment').empty().append(indexCommentHtml)
}

const success = function (data) {
  console.log(data)
}

const failure = function (error) {
  console.error(error)
}

module.exports = {
  indexSuccess,
  success,
  failure
}
