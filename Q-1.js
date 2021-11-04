//         rounding char codes to the nearest sounded character

function rounding(character) {
    if (typeof character != 'string') return ('please change the input into a string')
    let list = [97, 101, 105, 111, 117]
    let charCode = character.charCodeAt(0)
    let result = list.map(item => Math.abs(charCode - item))
    let min = Math.min(...result)
    return String.fromCharCode(list[result.indexOf(min)])
}

console.log(rounding('s'))
console.log(rounding('k'))
console.log(rounding('i'))
console.log(rounding('q'))
console.log(rounding('a'))