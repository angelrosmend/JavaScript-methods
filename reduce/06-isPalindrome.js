function isPalindrome(str){
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined ? true : false
}

const test = isPalindrome('do geese see god')
console.log(test)