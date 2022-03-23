/* Math functions
Math.floor -->Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil -->Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round -->Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer) -->Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
Math.random() -->Returns a random number from 0 to 1 (not including 1).
Math.max(a, b, c...) / Math.min(a, b, c...) -->Returns the greatest/smallest from the arbitrary number of arguments.
Math.pow(n, power) -->Returns n raised to the given power.
*/

val = Math.PI;
val1 = Math.round(2.4);
val2 = Math.round(2.9);
val3 = Math.ceil(2.4);
val4 = Math.floor(2.4);
val5 = Math.sqrt(64);
val6 = Math.pow(2, 4);
val7 = Math.abs(-100);
val8 = Math.min(2, 3, 4, 5, 88, 99, 62);
val9 = Math.max(20, 55, 71, 1, 3, 8);
val10 = Math.random();
val11 = Math.random() * 10;
val12 = Math.floor(Math.random() * 100 + 1);
console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);
console.log(val10);
console.log(val11);
console.log(val12);

// toString(base) -->The method num.toString(base) returns a string representation of num in the numeral system with the given base.
let num = 255;
alert(num.toString(16));
alert(num.toString(2));

//The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
let num1 = 12.34;
alert(num1.toFixed(1));

/* Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
NaN represents an error.
They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
isNaN(value) converts its argument to a number and then tests it for being NaN: */
alert(isNaN(NaN));
alert(isNaN("str"));

//The function parseInt returns an integer, whilst parseFloat will return a floating-point number
alert(parseInt('100px'));
alert(parseFloat('12.5em'));

alert(parseInt('12.3'));
alert(parseFloat('12.3.4'));