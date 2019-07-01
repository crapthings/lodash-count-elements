const _ = require('lodash')

module.exports = function(arr = [], opts = {}) {
  opts = _.defaults(opts, { order: 'desc' })
  let result = _.chain(arr)
    .countBy()
    .map((value, key) => ({ key, value }))
    .orderBy(['value'], [opts.order])
    .value()

  if (_.isFunction(opts.filter)) {
    result = _.filter(result, opts.filter)
  }

  if (_.isFunction(opts.reject)) {
    result = _.reject(result, opts.reject)
  }

  if (_.isNumber(opts.take)) {
    result = _.take(result, opts.take)
  }

  return result
}
