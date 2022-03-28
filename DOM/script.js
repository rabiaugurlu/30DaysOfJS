/*DOM: Document Object Model, or DOM for short, represents all page content as objects that can be modified. The document object is the main “entry point” to the page. We can change or create anything on the page using it.
DOM is not only for browsers
The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use DOM too.
For instance, server-side scripts that download HTML pages and process them can also use DOM. They may support only a part of the specification though.
*/

/* let val;
val = window.document;
val = document;
val = document.head;
val = document.body;
val = document.URL;
val = document.domain;
val = document.images;
val = document.title;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute("src");
console.log(val); */

//Searching: getElement*, querySelector*
//1)document.getElementById or just id: If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.
// get the element
let elem = document.getElementById('elem');
// make its background red
elem.style.background = 'red';

//2)querySelectorAll: By far, the most versatile method, elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.
let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
}

//3)querySelector: The call to elem.querySelector(css) returns the first element for the given CSS selector.In other words, the result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements and picking one, while elem.querySelector just looks for one. So it’s faster and also shorter to write.
// can be any collection instead of document.body.children
for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
        alert("The archive reference: " + elem.href);
    }
}

/*getElementsBy*
There are also other methods to look for nodes by a tag, class, etc.
Today, they are mostly history, as querySelector is more powerful and shorter to write.
So here we cover them mainly for completeness, while you can still find them in the old scripts.
Selem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
elem.getElementsByClassName(className) returns elements that have the given CSS class.
document.getElementsByName(name) returns elements with the given name attribute, document-wide. Very rarely used. */

//NOTE:The "s" letter is absent in getElementById, because it returns a single element. But getElementsByTagName returns a collection of elements, so there’s "s" inside.

/*Main DOM node properties are:
nodeType
We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, and a few others for other node types. Read-only.
nodeName/tagName
For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName describes what it is. Read-only.
innerHTML
The HTML content of the element. Can be modified.
outerHTML
The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets replaced with the new HTML in the outer context.
nodeValue/data
The content of a non-element node (text, comment). These two are almost the same, usually we use data. Can be modified.
textContent
The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML insertions.
hidden
When set to true, does the same as CSS display:none.
DOM nodes also have other properties depending on their class. For instance, <input> elements (HTMLInputElement) support value, type, while <a> elements (HTMLAnchorElement) support href etc. Most standard HTML attributes have a corresponding DOM property. */

/*Creating an element
To create DOM nodes, there are two methods:

document.createElement(tag)
Creates a new element node with the given tag:

let div = document.createElement('div');
document.createTextNode(text)
Creates a new text node with the given text:

let textNode = document.createTextNode('Here I am'); */

//Node removal: To remove a node, there’s a method node.remove().

/*Methods to create new nodes:

document.createElement(tag) – creates an element with the given tag,
document.createTextNode(value) – creates a text node (rarely used),
elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.
Insertion and removal:

node.append(...nodes or strings) – insert into node, at the end,
node.prepend(...nodes or strings) – insert into node, at the beginning,
node.before(...nodes or strings) –- insert right before node,
node.after(...nodes or strings) –- insert right after node,
node.replaceWith(...nodes or strings) –- replace node.
node.remove() –- remove the node.
Text strings are inserted “as text”.

There are also “old school” methods:

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
All these methods return node.

Given some HTML in html, elem.insertAdjacentHTML(where, html) inserts it depending on the value of where:

"beforebegin" – insert html right before elem,
"afterbegin" – insert html into elem, at the beginning,
"beforeend" – insert html into elem, at the end,
"afterend" – insert html right after elem.
Also there are similar methods, elem.insertAdjacentText and elem.insertAdjacentElement, that insert text strings and elements, but they are rarely used.

To append HTML to the page before it has finished loading:

document.write(html) */

/*className and classList
Changing a class is one of the most often used actions in scripts.

In the ancient time, there was a limitation in JavaScript: a reserved word like "class" could not be an object property. That limitation does not exist now, but at that time it was impossible to have a "class" property, like elem.class.

So for classes the similar-looking property "className" was introduced: the elem.className corresponds to the "class" attribute.

For instance:

<body class="main page">
  <script>
    alert(document.body.className); // main page
  </script>
</body>
If we assign something to elem.className, it replaces the whole string of classes. Sometimes that’s what we need, but often we want to add/remove a single class.

There’s another property for that: elem.classList.

The elem.classList is a special object with methods to add/remove/toggle a single class.

For instance:

<body class="main page">
  <script>
    // add a class
    document.body.classList.add('article');

    alert(document.body.className); // main page article
  </script>
</body>
So we can operate both on the full class string using className or on individual classes using classList. What we choose depends on our needs.

Methods of classList:

elem.classList.add/remove("class") – adds/removes the class.
elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
elem.classList.contains("class") – checks for the given class, returns true/false. */

/*Elements have the following geometry properties:

offsetParent – is the nearest positioned ancestor or td, th, table, body.
offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
offsetWidth/offsetHeight – “outer” width/height of an element including borders.
clientLeft/clientTop – the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.
clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
scrollWidth/scrollHeight – the width/height of the content, just like clientWidth/clientHeight, but also include scrolled-out, invisible part of the element.
scrollLeft/scrollTop – width/height of the scrolled out upper part of the element, starting from its upper-left corner.
All properties are read-only except scrollLeft/scrollTop that make the browser scroll the element if changed. */

/*Geometry:

Width/height of the visible part of the document (content area width/height): document.documentElement.clientWidth/clientHeight

Width/height of the whole document, with the scrolled out part:

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
Scrolling:

Read the current scroll: window.pageYOffset/pageXOffset.

Change the current scroll:

window.scrollTo(pageX,pageY) – absolute coordinates,
window.scrollBy(x,y) – scroll relative the current place,
elem.scrollIntoView(top) – scroll to make elem visible (align with the top/bottom of the window). */

/*Any point on the page has coordinates:

Relative to the window – elem.getBoundingClientRect().
Relative to the document – elem.getBoundingClientRect() plus the current page scroll.
Window coordinates are great to use with position:fixed, and document coordinates do well with position:absolute.

Both coordinate systems have their pros and cons; there are times we need one or the other one, just like CSS position absolute and fixed. */