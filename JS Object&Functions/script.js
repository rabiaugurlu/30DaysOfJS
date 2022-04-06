/*Objects: In contrast, objects are used to store keyed collections of various data and more complex entities.
An empty object (“empty cabinet”) can be created using one of two syntaxes:
  1)let user = new Object(); // "object constructor" syntax
  2)let user = {};  // "object literal" syntax

//Literals and properties
We can immediately put some properties into {...} as “key: value” pairs:
   let user = {     // an object
       name: "John",  // by key "name" store value "John"
          age: 30        // by key "age" store value 30
};
*/

/*Garbage collection
Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.
What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?
//Reachability
The main concept of memory management in JavaScript is reachability.
Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
For instance:
The currently executing function, its local variables and parameters.
Other functions on the current chain of nested calls, their local variables and parameters.
Global variables.
(there are some other, internal ones as well)
These values are called roots.
Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.
For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.
There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable. 
//Internal algorithms
The basic garbage collection algorithm is called “mark-and-sweep”.
The following “garbage collection” steps are regularly performed:
The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until every reachable (from the roots) references are visited.
All objects except marked ones are removed.
NOTES:That’s the concept of how garbage collection works. JavaScript engines apply many optimizations to make it run faster and not affect the execution.
Some of the optimizations:
*Generational collection – objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively. Those that survive for long enough, become “old” and are examined less often.
*Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately. That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.
*Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.
*/

/*Object-oriented programming: When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”. 
//“this” in methods
It’s common that an object method needs to access the information stored in the object to do its job.
For instance, the code inside user.sayHi() may need the name of the user.To access the object, a method can use the this keyword.The value of this is the object “before dot”, the one used to call the method.
For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
Here during the execution of user.sayHi(), the value of this will be user.

Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }

};
…But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

That’s demonstrated below:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
If we used this.name instead of user.name inside the alert, then the code would work.

NOTE:Arrow functions have no “this”
Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.*/

/*Constructor function
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.
JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.
 */

/*Property flags and descriptors
As we know, objects can store properties.
Until now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.
In this chapter we’ll study additional configuration options, and in the next we’ll see how to invisibly turn them into getter/setter functions.

//Property flags
Object properties, besides a value, have three special attributes (so-called “flags”):
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not. 

//Sealing an object globally
Property descriptors work at the level of individual properties.
There are also methods that limit access to the whole object:
Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

And also there are tests for them:
Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.*/

/*Property getters and setters
There are two kinds of object properties.
The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.
The second type of properties is something new. It’s accessor properties. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

//Accessor descriptors
Descriptors for accessor properties are different from those for data properties.
For accessor properties, there is no value or writable, but instead there are get and set functions.
That is, an accessor descriptor may have:
get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.
*/

/*Prototypal inheritance
In programming, we often want to take something and extend it.
For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
Prototypal inheritance is a language feature that helps in that.

//[[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”.
Note:Writing doesn’t use prototype.The prototype is only used for reading properties.Write/delete operations work directly with the object.
*/

/*Error handling, "try...catch"
No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.
Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

//The “try…catch” syntax
The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}

Note:We can also generate our own errors using the throw operator. Technically, the argument of throw can be anything, but usually it’s an error object inheriting from the built-in Error class. More on extending errors in the next chapter.
Rethrowing is a very important pattern of error handling: a catch block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn’t know.
Even if we don’t have try...catch, most environments allow us to setup a “global” error handler to catch errors that “fall out”. In-browser, that’s window.onerror.
 */

//Be sure to check the references section for in-depth topics.