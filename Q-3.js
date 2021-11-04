let exampleArray = [1, 2, 0, 0, 0, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7]

const correctArray = (Array) => {
    if (toString.call(Array) !== '[object Array]') return ('please insert an array')
    Array.map((item) => {
        if (item === 0) {
            Array.splice(Array.indexOf(item), 1)
            Array.push(0)
        }
    })
    return Array
}

console.log(correctArray(exampleArray))