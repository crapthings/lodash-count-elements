const _ = require('lodash')

module.exports = function(arr = [], opts = { order: 'desc' }) {
  return _.chain(arr)
    .countBy()
    .map((value, key) => ({ key, value }))
    .orderBy(['value'], [opts.order])
    .value()
}
