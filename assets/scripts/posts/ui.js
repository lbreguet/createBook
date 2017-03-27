'use strict'

const indexPostsTemplate = require('../templates/index-post-data.handlebars')
const showPostTemplate = require('../templates/show-post-data.handlebars')

const indexSuccess = (data) => {
  console.log(data)
  const indexPostsHtml = indexPostsTemplate({ posts: data.posts })
  $('.content').empty().append(indexPostsHtml)
}

const showSuccess = (data) => {
  console.log(data)
  const showPostHtml = showPostTemplate({ post: data.post })
  $('.content').empty().append(showPostHtml)
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
  success,
  failure
}
