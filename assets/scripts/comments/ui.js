'use strict'

const indexCommentTemplate = require('../templates/comments/index-comment.handlebars')

const indexSuccess = function (data, id) {
  const indexCommentHtml = indexCommentTemplate({
    comments: data.comments,
    post_id: id,
    users: data.users
  })
  $('.index-comment').empty().append(indexCommentHtml)
}

const createSuccess = () => {
  $('.comment-message').text('Your comment has been added').css('color', 'rgb(93, 106, 219)').show(0).delay(1000).fadeOut(500)
  $('.clear').val('')
}

const createFailure = () => {
  $('.comment-message').text('There was a problem adding your comment. Please try again!').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

const deleteSuccess = () => {
  $('.comment-message').text('Your comment has been deleted').css('color', 'rgb(93, 106, 219)').show(0).delay(1000).fadeOut(500)
}

const deleteFailure = () => {
  $('.comment-message').text('There was a problem deleting your comment. Try again!').css('color', 'red').show(0).delay(1000).fadeOut(500)
}

const updateSuccess = (data) => {
  $('#exampleModal').modal('hide')
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
  createFailure,
  updateSuccess,
  deleteSuccess,
  deleteFailure,
  success,
  failure
}
