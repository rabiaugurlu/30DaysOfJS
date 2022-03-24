// splice: It can do everything: insert, remove and replace elements.

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

//slice: It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

let arr1 = ["t", "e", "s", "t"];

alert(arr1.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr1.slice(-2)); // s,t (copy from -2 till the end)

//concat: The method concat creates a new array that includes values from other arrays and additional items.

let arr2 = [1, 2];
let arrayLike = {
    0: "something",
    length: 1
};

alert(arr2.concat(arrayLike)); // 1,2,[object Object]
//[1, 2, arrayLike]

/*
1)indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
2)lastIndexOf(item, from) – same, but looks for from right to left.
3)includes(item, from) – looks for item starting from index from, returns true if found. */

let arr3 = [1, 0, false];

alert(arr3.indexOf(0)); // 1
alert(arr3.indexOf(false)); // 2
alert(arr3.indexOf(null)); // -1

alert(arr3.includes(1)); // true

/*find and findIndex
The syntax is:
let result = arr4.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
});
 The function is called for elements of the array, one after another:
item is the element.
index is its index.
array is the array itself.
Note: The findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.
*/

//filter: The syntax is similar to find, but filter returns an array of all matching elements:

//map: It calls the function for each element of the array and returns the array of results.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

//reverse: The method arr4.reverse reverses the order of elements in arr.
let arr4 = [1, 2, 3, 4, 5];
arr4.reverse();

alert(arr4); // 5,4,3,2,1

//Array.isArray: It returns true if the value is an array, and false otherwise.
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

//Don't forget to check out the references section for more.