/* Array, to store ordered collections.
There are two syntaxes for creating an empty array:
1)let arr = new Array();
2)let arr = [];
Almost all the time, the second syntax is used. 
Array elements are numbered, starting with zero.
*/

let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

//We can replace an element:
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

//Or add a new one to the array:
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

//The total count of the elements in the array is its length:
let fruits9 = ["Apple", "Orange", "Plum"];

alert(fruits9.length); // 3

//An array, just like an object, may end with a comma:
let fruits1 = [
    "Apple",
    "Orange",
    "Plum",
];

//pop: Extracts the last element of the array and returns it:
let fruits2 = ["Apple", "Orange", "Pear"];

alert(fruits2.pop()); // remove "Pear" and alert it

alert(fruits2); // Apple, Orange

// push: Append the element to the end of the array:
let fruits3 = ["Apple", "Orange"];

fruits3.push("Pear");

alert(fruits3); // Apple, Orange, Pear

//shift: Extracts the first element of the array and returns it:
let fruits4 = ["Apple", "Orange", "Pear"];

alert(fruits4.shift()); // remove Apple and alert it

alert(fruits4); // Orange, Pear

//unshift: Add the element to the beginning of the array:

let fruits5 = ["Orange", "Pear"];

fruits5.unshift('Apple');

alert(fruits5); // Apple, Orange, Pear

//Methods push/pop run fast, while shift/unshift are slow.

//Loops
//One of the oldest ways to cycle array items is the for loop over indexes:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}
//But for arrays there is another form of loop, for..of: The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

let fruits6 = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits6) {
    alert(fruit);
}

//Multidimensional arrays: Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert(matrix[1][1]); // 5, the central element

//Note: The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods. If we shorten length manually, the array is truncated.