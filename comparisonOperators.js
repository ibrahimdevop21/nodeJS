//! 03:05
/**
 * Comparison Operators
 * == Equal
 * != Not Equal
 *
 * === Identical
 * !== Not Identical
 *
 * > Larger than
 * >= larger than or equal
 *
 * < smaller than
 * <= smaller than or equal
 */

/** 03:12
 * Logical operators
 * ! Not
 * && And
 * || Or
 */

// let price = 100;
let discount = true;
let dicountAmount = 30;

if (discount === true) {
  price -= dicountAmount;
}

// COnditional (Ternery operator) 3:33
let theName = 'ahmad';
let theGender = 'Male';
let theAge = 33;

if (theGender === 'Male') {
  console.log('Mr.');
} else {
  console.log('Mrs.');
}

theGender === 'Male' ? console.log('Mr.') : console.log('Mrs.H');
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log('20 to 60')
  : theAge > 60
  ? console.log('Larger than 60')
  : console.log('Unkwon');

  /**
   * Logical Or ||
   * --Null + Undefined + Any Falsy Value
   * Nullish Coalescing operator ??
   * -- Null + Undefined
   */

  let price = 100

  console.log(`The Price is ${price}`)

  //! Nullish Coalsescing operator ?? will return the falsy value unlike the logical or || will not 