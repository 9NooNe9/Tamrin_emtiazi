let arr = [{age: 23, name: 'mahdi'}, {age: 18, name: 'fazli'}, {age: 42, name: 'mohammadReza'}, {age: 21, name: 'mahya'}]

const Sort = (Array, parameter) => {
    if (typeof parameter != 'string' || toString.call(Array) !== '[object Array]') return ('please insert correct inputs')
    let result = {}
    for (let key of Array) {
        if (result[key[parameter]]) result[key[parameter]].push(key)
        else result[key[parameter]] = [key]
    }
    return result
}

console.log(Sort(arr, 'age'))