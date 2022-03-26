//Loops are a way to repeat the same code multiple times.
//The while loop: While the condition is truthy, the code from the loop body is executed.
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert(i);
    i++;
} //A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.
//Note: Curly braces are not required for a single-line body.

//The do…while loop: The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let j = 0;
do {
    alert(j);
    j++;
} while (j < 3);

/*The for loop:
for (başla; koşul; adım) {
    // ... döngü gövdesi ...
  } 
Exp: 
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}		
begin--> let i = 0	Executes once upon entering the loop.
condition--> i < 3	Checked before every loop iteration. If false, the loop stops.
body--> alert(i)	Runs again and again while the condition is truthy.
step--> i++	Executes after the body on each iteration. */

let k = 0; // we have i already declared and assigned
for (; k < 3; k++) { // no need for "begin"
    alert(k); // 0, 1, 2
}

//Breaking the loop:  if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop.
let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}
alert('Sum: ' + sum);

//Continue to the next iteration: It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
for (let l = 0; l < 10; l++) {

    // if true, skip the remaining part of the body
    if (l % 2 == 0) continue;
    alert(l); // 1, then 3, 5, 7, 9
}

//Note: Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.