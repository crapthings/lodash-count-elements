# lodash-count-elements

### Usage

```bash
npm i @crapthings/lodash-count-elements
```

```js
const countels = require('@crapthings/lodash-count-elements')
const array = ['a', 'b', 'c', 'b', 'c', 'c']
console.log(countels(array))
console.log(countels(array, { order: 'desc' })) //default
console.log(countels(array, { order: 'asc' }))
```

```js
const countels = require('@crapthings/lodash-count-elements')
const example = ['a', 'b', 'c', 'd', 'a', 'a', 'a', 'b', 'e', 'f', 'c', 'c', 'c', 'a']
const test = countels(example, {
  take: 2,
  reject: ({ key, value }, k) => {
    if (key === 'a') return true
  }
})

console.log(test)
[ { key: 'c', value: 4 }, { key: 'b', value: 2 } ]
```
