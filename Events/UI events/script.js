/*Mouse events
Please note: such events may come not only from “mouse devices”, but are also from other devices, such as phones and tablets, where they are emulated for compatibility.

//Events mouseover/mouseout, relatedTarget: The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it leaves.These events are special, because they have property relatedTarget. This property complements target. When a mouse leaves one element for another, one of them becomes target, and the other one – relatedTarget.
For mouseover:
*event.target – is the element where the mouse came over.
*event.relatedTarget – is the element from which the mouse came (relatedTarget → target).
For mouseout the reverse:
*event.target – is the element that the mouse left.
*event.relatedTarget – is the new under-the-pointer element, that mouse left for (target → relatedTarget).

//Skipping elements
The mousemove event triggers when the mouse moves. But that doesn’t mean that every pixel leads to an event.
The browser checks the mouse position from time to time. And if it notices changes then triggers the events.

//Events mouseenter and mouseleave
Events mouseenter/mouseleave are like mouseover/mouseout. They trigger when the mouse pointer enters/leaves the element.
But there are two important differences:
1)Transitions inside the element, to/from descendants, are not counted.
2)Events mouseenter/mouseleave do not bubble.
These events are extremely simple.
When the pointer enters an element – mouseenter triggers. The exact location of the pointer inside the element or its descendants doesn’t matter.
When the pointer leaves an element – mouseleave triggers.

//Drag’n’Drop algorithm
The basic Drag’n’Drop algorithm looks like this:
1)On mousedown – prepare the element for moving, if needed (maybe create a clone of it, add a class to it or whatever).
2)Then on mousemove move it by changing left/top with position:absolute.
3)On mouseup – perform all actions related to finishing the drag’n’drop.

//Keyboards events
Pressing a key always generates a keyboard event, be it symbol keys or special keys like Shift or Ctrl and so on. The only exception is Fn key that sometimes presents on a laptop keyboard. There’s no keyboard event for it, because it’s often implemented on lower level than OS.
Keyboard events:
keydown – on pressing the key (auto-repeats if the key is pressed for long),
keyup – on releasing the key.
Main keyboard event properties:
code – the “key code” ("KeyA", "ArrowLeft" and so on), specific to the physical location of the key on keyboard.
key – the character ("A", "a" and so on), for non-character keys, such as Esc, usually has the same value as code.
In the past, keyboard events were sometimes used to track user input in form fields. That’s not reliable, because the input can come from various sources. We have input and change events to handle any input

//Scrolling
The scroll event allows reacting to a page or element scrolling. There are quite a few good things we can do here.
For instance:
Show/hide additional controls or information depending on where in the document the user is.
Load more data when the user scrolls down till the end of the page.

//Prevent scrolling
How do we make something unscrollable?
We can’t prevent scrolling by using event.preventDefault() in onscroll listener, because it triggers after the scroll has already happened.
But we can prevent scrolling by event.preventDefault() on an event that causes the scroll, for instance keydown event for pageUp and pageDown.
If we add an event handler to these events and event.preventDefault() in it, then the scroll won’t start.
There are many ways to initiate a scroll, so it’s more reliable to use CSS, overflow property.

*/