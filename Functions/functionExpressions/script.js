/*The syntax that we used before is called a Function Declaration:
function sayHi() {
  alert( "Hello" );
}
There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.
let sayHi = function() {
  alert( "Hello" );
}; */

//Callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel); //The arguments showOk and showCancel of ask are called callback functions or just callbacks.
/*We can use Function Expressions to write the same function much shorter:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here. */

/*Arrow functions, the basics
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
It’s called “arrow functions”, because it looks like this:
      let func = (arg1, arg2, ..., argN) => expression;
This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
In other words, it’s the shorter version of:
      let func = function(arg1, arg2, ..., argN) {
      return expression;
}; */