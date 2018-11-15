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
# lodash-count-elements
