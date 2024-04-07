/**
 * string methode 3
 * substring (start [Mand], End[opt] not including end)
 * --start > end will swap
 * --start < 0 it start from 0
 * --use length to get last character
 * substr(start [mand], characters to extract)
 * -- start >= length = ''
 * -- negative start from end
 * inclueds (value [mand], start [opt] default 0) [ES6]
 * startWith(value [mand], start [opt] default 0) [ES6]
 * endsWith(value [mand], length [opt] default full length) [ES6]
 */

let a = 'Elzero Web School'

console.log(a.substring(2, 6))
console.log(a.substring(-10, 6))
console.log(a.substring(a.length -5, a.length -3)) // ==> ch

console.log(a.substr(0, 6))
console.log(a.substr(17))
console.log(a.substr(-3))
console.log(a.substr(-5, 2)) // ==> ch

console.log(a.includes('WEB')) // ==> flase
console.log(a.includes('Web', 8)) // ==> true

console.log(a.startsWith('E')) // ==> true
console.log(a.startsWith('e')) // ==> flase
console.log(a.startsWith('zero', 2)) // ==> true

/**
 * String Challenge
 * All Solutions Must Be in one chain
 * we can use concatenatinaton
 * 
 */

let a = 'Elzero Web School'

console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`)

// Solution Must Be Dynamic And String May change
console.log(a.charAt(0).toLowerCase()+a.substring(1).toUpperCase())
