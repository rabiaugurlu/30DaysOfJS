/*Function Declaration:
function showMessage() {
    alert( 'Hello everyone!' );
  }*/
//Local variables: A variable declared inside a function is only visible inside that function.
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
    alert(message);
}
showMessage(); // Hello, I'm JavaScript!
alert(message); // <-- Error! The variable is local to the function

/*Outer variables: A function can access an outer variable as well.
let userName = 'John';

function showMessage1() {
    let message1 = 'Hello, ' + userName;
    alert(message1);
}
showMessage1(); // Hello, John 
*/

/*Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).
It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data. */

//NOTE:Be sure to check out the references section for more information on functions.