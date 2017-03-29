'use strict'

const config = require('../config')

const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/comments',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  index,
  create,
  update,
  destroy
}
