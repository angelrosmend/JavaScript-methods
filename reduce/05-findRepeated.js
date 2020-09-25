// return how many times a word is repeated

function repeated(str) {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]) acc[el]++
        else acc[el] = 1
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
    // turn object to arr where the first el will be the key and the scond its value
}

const test = repeated('this is a word test where we check how many times a word is repeated')
console.log(test)