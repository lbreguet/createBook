'use strict'

const indexPostsTemplate = require('../templates/index-post-data.handlebars')

const indexSuccess = (data) => {
  console.log(data)
  const indexPostsHtml = indexPostsTemplate({ posts: data.posts })
  $('.post-content').empty().append(indexPostsHtml)
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  indexSuccess,
  success,
  failure
}
