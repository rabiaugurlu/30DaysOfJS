/*The “if” statement:
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.*/
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert('You are right!');

//The “else” clause: The if statement may contain an optional “else” block. It executes when the condition is falsy.
let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 == 2015) {
    alert('You guessed it right!');
} else {
    alert('How can you be so wrong?'); // any value except 2015
}

//Several conditions: “else if”: Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year2 < 2015) {
    alert('Too early...');
} else if (year2 > 2015) {
    alert('Too late');
} else {
    alert('Exactly!');
}

/*Conditional operator ‘?’: 
let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2. */

//The "switch" statement: A switch statement can replace multiple if checks.
let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
}