//filter out null, undefined, 0 of an arr

const clean = arr => arr.reduce((acc, el) => {
    if(el){
        acc.push(el)
    }  
    return acc              // in JavasScript, undefined, null, 0 etc, return false
},[])

const cleaned = clean([1, null, 2, 3, undefined, 4, 5, 0])
console.log(cleaned)