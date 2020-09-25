//Return biggest number in just one iteration

const getBiggest = (arr) => arr.reduce((acc, el) =>  acc  > el ? acc : el)     //We left the second arguments as undefined, in order for reduce to set the value of acc as the first element of the arr(el), and el will be the second element of arr

const biggest = getBiggest([50, 100, 66, -700, 1001])
console.log(biggest)