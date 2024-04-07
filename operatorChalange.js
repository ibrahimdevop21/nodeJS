let a = 10;
let b = '20';
let c = 80;
11+

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + b + --a * +b++ - +b * a + --a - +true);
/*
[++a] [+]
[++a]
--Value:
--Explain:
[+]
--Explain:
*/

/* Challenge2*/

let d = '-100';
let e = '20';
let f = 30;
let g = true;

// only use variables value
// do not use variable twice

console.log(); // 2000
console.log(); // 173
//! elzeroJS 1st 02:06:34






































































































/**
 * String methods
 * -- sb
 */









console.log(a.charAt())







/**
 * String Challenge
 * All Solutions Must Be In One Chain
 * You Can Use Concatenate
 */

let asd = 'Elzero Web School'

// Include This Methods In Your Solution [slice, charAt]
console.log(asd.slice(asd.charAt(2), 6))  // Zero
console.log(asd.charAt(asd.slice(2, 6)))

// 8H HHHHHHHHH
console.log(a.slice(13, 14).toUpperCase().repeat(8))

// return array
console.log() // [Elzero School]
console.log(toString(a).split(''))

// use only ' substr' Method + Template Literals In Your Solution
console.log() // Elzero Shcool
> console.log(a.substr(0, 7), a.substr(-6))
Elzero  School
undefined
/* > console.log
console.log

> console.log(`${a.substr(0, 7} ${a.substr(-6)}`)
console.log(`${a.substr(0, 7} ${a.substr(-6)}`)
                           ^

Uncaught SyntaxError: missing ) after argument list
> 
 */

// Solution Must Be Dynamic And String May Change
console.log() // eLZERO WEB SCHOOLh h