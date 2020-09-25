let arr = [[1,2], [[3,4]], [1,[]]]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])

const flattened = flatten(arr)
console.log(flattened)