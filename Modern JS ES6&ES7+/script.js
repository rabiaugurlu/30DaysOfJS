//Recursion and stack
/*Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.
When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.
 */

/*Rest parameters...
 A function can be called with any number of arguments, no matter how it is defined.
Like here:

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) ); 
There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.*/

/*Spread syntax
For instance, there’s a built-in function Math.max that returns the greatest number from a list:

alert( Math.max(3, 5, 1) ); // 5
Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite. */

/*Arrow functions
!As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is taken from the outside.
!Arrow functions can’t run with new
Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new.

//Arrow functions VS bind
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

.bind(this) creates a “bound version” of the function.
The arrow => doesn’t create any binding. The function simply doesn’t have this. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
Arrow functions:
Do not have this
Do not have arguments
Can’t be called with new
They also don’t have super
*/

/*Class
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
//The “class” syntax
The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

//Class inheritance
Class inheritance is a way for one class to extend another class.
So we can create new functionality on top of the existing.
Note:Arrow functions have no super
To extend a class: class Child extends Parent:
That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
When overriding a constructor:
We must call parent constructor as super() in Child constructor before using this.
When overriding another method:
We can use super.method() in a Child method to call Parent method.
Internals:
Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
So it’s not safe to copy a method with super from one object to another.
Also:Arrow functions don’t have own this or super, so they transparently fit into the surrounding context.*/
//Be sure to check the references section for in-depth topics.