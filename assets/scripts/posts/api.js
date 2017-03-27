'use strict'

const config = require('../config')

const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const searchPosts = function (data) {
  let endpoint = '/posts?'
  endpoint += 'title=' + data.title
  return $.ajax({
    url: config.apiOrigin + endpoint,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  index,
  searchPosts,
  show,
  create,
  update,
  destroy
}
