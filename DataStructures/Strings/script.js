//The length property has the string length:
alert(`My\n`.length); //str.length is a numeric property, not a function. There is no need to add parenthesis after it.

//Methods toLowerCase() and toUpperCase() change the case:
alert('Interface'.toUpperCase());
alert('Interface'.toLowerCase());
//Or, if we want a single character lowercased:
alert('Interface' [0].toLowerCase());

//str.indexOf : Searching for a substring (It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.)
let str = 'Widget with id';
alert(str.indexOf('Widget'));
alert(str.indexOf('widget'));
alert(str.indexOf("id"));
//The optional second parameter allows us to start searching from a given position.
let str1 = 'Widget with id';
alert(str1.indexOf('id', 2));

//string concat
const firstName = 'Rabia';
const lastName = 'Uğurlu';
let val;
let hobbies = "fitness', 'yoga', 'software";
val = firstName + " " + lastName;
val = 'Rabia';
val += ' Uğurlu';
val = 'My name is ' + firstName + ' ' + lastName;
console.log(val);
console.log(typeof val);

//val=val[0]; //0.index (o)

//val=val.indexOf("Uğurlu"); // Writes the index number of the value it finds. Index starts from 0
//val=val.indexOf("x"); //If it is not present in the expression, we get -1

//substring
//val=val.substring(0,3); // Prints indexes 0 to 3

//slice
//val=val.slice(7); // starts at 6 and prints to the end of the string expression

//string search
val = val.replace("Rabia", "Ceng"); // Writes Ceng instead of Rabia
console.log(val);

//trim(); removes spaces

val = hobbies.split(','); // separates from comma
console.log(hobbies);