/* //TODO:
  --[1] Create 3 Variables [Title, Description, Date]
  --Variable Name Must Be Two Words
  -- Description Content Is "Elzero Web School"
  --Date content Is "25/10"

  [2]Create Variable Contains Div And This Div Contains
  -- H3 For Title
  -- P For Paragraph
  -- Span For Time

[3] Add This card To Page 4 Times
[4] use Template Literals For Concatenate

Extra
--Repeat

codepen.io + Comment
*/

let title = 'Hello, Elzero';
let description = 'Elzero WEB School';
let date = new Date();

const build = `
<h3>${title}</h3>
<p>${description}</p>
<span>${date}</span>
`;

document.write(build.repeat(4));

// for (let i = 1; i < 5; i++) {
//   document.write(build);
// }

//Todo:
//!research repeat
//!research more about toLocal

//! syntactic sugare 2: 10
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);

console.log(Numebr.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE);

console.log((100).toString());
console.log((122.23231).toFixed(2)); //! ==> to string
console.log(parseInt('1231')); //! ==> to number
console.log(Number('2343 string')); //! NaN
console.log(+'1023 string'); //! ==> NaN
console.log(parseInt('2324 string')); //! ==> 2342
console.log(parseFloat('234.2434 string')); // same
console.log(parseInt('lj;lkj 23423 lkj')); // ==> NaN

console.log(Number.isInteger(100.323));
console.log(Number.isInteger(2323));
console.log(Number.isInteger('232'));

//* Math Object
//! ==> round(), ceil(), floor(), min(), max(), pow(), random(), trunc() 2: 23
console.log(Math.round(99, 2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.5)); // 100
console.log(Math.floor(99.9)); // 99

console.log(Math.min(232, 232, 31, 3, 34)); // 3
console.log(Math.max('99999', 232, 3234, 2342)); // 99999

console.log(Math.pow(2, 4)); // 16 same as 2^4
console.log(Math.random());
console.log(Math.trunc(2342.8)); // 2342 return the integer part of the number
//todo: Number Challenge

let aa = 1_00;
let bb = 2_00.5;
let cc = 1e2;
let dd = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(Math.floor(Math.min(aa, bb, cc, dd)));

// Use Variable a + d one time to Get The Needed Output 10000

console.log(Math.floor(dd) * aa * 50);

// GEt Integer 2 from var d with 4 different method

console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// Use Variables b + d to Get This Values 66.67 => string, 67 => Number
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // ==> 66.67 string

console.log(parseFloat((Math.floor(b) / Math.ceil(d)).toFixed(2)));
// ==> 66.67 float i could use parseInt to return 67 int number

/** String Methods 2:29
 *
 * Access With Index
 * Access With charAt()
 * length
 * trim()
 * toUpperCase()
 * toLowerCase()
 * Chain Methods
 *
 */

let theName = 'Ibrahim';

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(22)); // ==> undifined

console.log(theName.length);
console.log(theName.trim()); //remove white space which is counted as a char

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/**
 * String Methods 2:38
 * indexOf(value [Mand], Start[Opt] 0)
 * lastIndexOf(Value [Mand], start [Opt] length)
 * slice(start [Mand], End [Opt] Not include end)
 * repeat[ES6](Times)
 * split(separator [Opt], Limit [Opt])
 *
 */

let a = 'Elzero Web School';

console.log(a.indexOf('Web'));
console.log(a.indexOf('web', 8)); // strat looking for the string from [8]
console.log(a.indexOf(o)); // the first o it encountred

console.log(a.lastIndexOf(o)); // the last o it incountred

console.log(a.slice(2, 6)); // strat from 2 end at 6 not including 6
console.log(a.slice(-5, -3)); // the same but from the end forword but the and the end is not included
console.log(a.repeat(5)); // well repeat the string 5 times

console.log(a.split('')); // return an array
console.log(a.split(' ', 2)); // well use space as a seperator and the limit is 2
//! any char could be used _ - | space a b c string"

/**
 * String Methods
 * -- substring(Start [Mand], end [opt] not including end)
 * ---- Start > End Will Swap
 * ---- Start < 0 It Start From 0
 * ---- use length To Get Last Character
 * -- substr(Start [Mand], Characters To Extract)
 * ---- Start >= length = ''
 * ----Negative Start from End
 * --includes (value [Mand], Start [Opt]) [ES6]
 * --startsWith (value [Mand], Start [Opt]) [ES6]
 * -- endsWith (value [Mand], Length [Opt] Default Full Length) [ES6]
 */

let u = 'Ezero Web School';

//! 2:55
