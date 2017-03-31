'use strict'

const indexPostsTemplate = require('../templates/posts/index-post-data.handlebars')
const showPostTemplate = require('../templates/posts/show-post-data.handlebars')
const createPostTemplate = require('../templates/posts/create-post-data.handlebars')

const indexSuccess = (data) => {
  const indexPostsHtml = indexPostsTemplate({ posts: data.posts })
  const createPostHtml = createPostTemplate()
  $('.content').empty().append(indexPostsHtml)
  $('.auth').empty()
  $('.create-css').empty().append(createPostHtml)
}

const showSuccess = (data) => {
  const showPostHtml = showPostTemplate({ post: data.post })
  $('.content').empty().append(showPostHtml)
  $('.create-css').empty()
  $('.auth').empty()
}

const clearCreateForm = () => {
  $('.clear').val('')
}

const createSuccess = () => {
  $('.clear').val('')
}

const updateSuccess = () => {
  $('#myModal').modal('hide')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  indexSuccess,
  showSuccess,
  clearCreateForm,
  createSuccess,
  updateSuccess,
  success,
  failure
}
