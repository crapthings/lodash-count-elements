const countels = require('./')
const example = ['a', 'b', 'c', 'd', 'a', 'a', 'a', 'b', 'e', 'f', 'c', 'c', 'c', 'a']

const test = countels(example, {
  take: 2,
  reject: ({ key, value }, k) => {
    if (key === 'a') return true
  }
})

console.log(test)
