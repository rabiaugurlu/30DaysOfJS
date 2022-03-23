/* 
Data types:
1)Primitive types:
-boolean
-null
-number
-string
-symbol
-bigint
-undefined */

let person = {
    name: "Rabia",
    sayHello: function() {
        alert("Hey, hello!");
    }
};
person.sayHello();

/*
2)Object types :
-arrays
-json
-date
-map
-set
-weakset
-weakmap
-function
*/

// The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.

alert(null.test); // error