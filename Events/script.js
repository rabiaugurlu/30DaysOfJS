/*Introduction to browser events
An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).
Here’s a list of the most useful DOM events, just to take a look at:

Mouse events:
1)click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
2)contextmenu – when the mouse right-clicks on an element.
3)mouseover / mouseout – when the mouse cursor comes over / leaves an element.
4)mousedown / mouseup – when the mouse button is pressed / released over an element.
5)mousemove – when the mouse is moved.

Keyboard events:
1)keydown and keyup – when a keyboard key is pressed and released.

Form element events:
1)submit – when the visitor submits a <form>.
2)focus – when the visitor focuses on an element, e.g. on an <input>.

Document events:
1)DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

CSS events:
1)transitionend – when a CSS-animation finishes. */

/*addEventListener
The fundamental problem of the aforementioned ways to assign handlers – we can’t assign multiple handlers to one event.

Let’s say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.

We’d like to assign two event handlers for that. But a new DOM property will overwrite the existing one:

input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // replaces the previous handler
Developers of web standards understood that long ago and suggested an alternative way of managing handlers using special methods addEventListener and removeEventListener. They are free of such a problem.

The syntax to add a handler:

element.addEventListener(event, handler, [options]);
event
Event name, e.g. "click".
handler
The handler function.
options
An additional optional object with properties:
once: if true, then the listener is automatically removed after it triggers.
capture: the phase where to handle the event, to be covered later in the chapter Bubbling and capturing. For historical reasons, options can also be false/true, that’s the same as {capture: false/true}.
passive: if true, then the handler will not call preventDefault(), we’ll explain that later in Browser default actions.
To remove the handler, use removeEventListener:

element.removeEventListener(event, handler, [options]); */

/*Bubbling and capturing
//Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//event.target: The most deeply nested element that caused the event is called a target element, accessible as event.target.
//Stopping bubbling
A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.
But any handler may decide that the event has been fully processed and stop the bubbling.
The method for it is event.stopPropagation().
For instance, here body.onclick doesn’t work if you click on <button>:
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
//Capturing
There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.
The standard DOM Events describes 3 phases of event propagation:
1*Capturing phase – the event goes down to the element.
2*Target phase – the event reached the target element.
3*Bubbling phase – the event bubbles up from the element.
  
*/