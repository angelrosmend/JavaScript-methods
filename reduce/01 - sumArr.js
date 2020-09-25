// return the sum of an array of numbers

//for of approach
const numbers = [1,2,5,-10,7] // 5
//reduce approach


const sum = numbers.reduce((acc, el) =>  acc + el, 0) //0 or reduce's second argument initializes the accumulatot(acc), th first argument (acc, el) being a callback function

//acc = 0, el = 1 => acc = 1
//acc = 1, el = 2 => acc = 3
//acc = 3, el = 5 => acc = 8
//acc = 8, el = -10 => acc = -2
//acc = -2, el = 7 => acc = 5 --> END



console.log(sum)


const sumArr = arr => {
    let sum = 0
    for(let n of arr){
        sum += n;
    }
    return sum
}

console.log(sumArr(numbers))

//