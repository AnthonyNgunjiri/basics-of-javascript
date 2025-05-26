| Method       | What it does                             | Returns                       |
| ------------ | ---------------------------------------- | ----------------------------- |
| `includes()` | Checks if a value exists                 | `true` / `false`              |
| `find()`     | First item matching a condition          | Matching item or `undefined`  |
| `some()`     | Checks if **any** item matches condition | `true` / `false`              |
| `every()`    | Checks if **all** items match condition  | `true` / `false`              |
| `filter()`   | Returns all matching items               | New filtered array            |
| `map()`      | Transforms each item                     | New array with modified items |
| `reduce()`   | Combines all into one                    | Single final value            |
| `indexOf()`  | Finds index of a value                   | Index or `-1`                 |
🧾 JavaScript DOM Cheat Sheet
🔍 Selecting Elements
Method	Description
document.getElementById(id)	Select by ID
document.getElementsByClassName(class)	Select all with class (HTMLCollection)
document.getElementsByTagName(tag)	Select all tags (HTMLCollection)
document.querySelector(selector)	First match (CSS selector)
document.querySelectorAll(selector)	All matches (NodeList)

📝 Reading/Changing Content
Property / Method	Description
element.textContent	Set or get plain text content
element.innerText	Like textContent, but respects CSS
element.innerHTML	Set or get HTML content
element.value	For inputs, get/set input value

🎨 Styling Elements
Action	Code Example
Set inline style	element.style.color = 'red';
Add class	element.classList.add('new-class');
Remove class	element.classList.remove('old-class');
Toggle class	element.classList.toggle('active');

🧠 DOM Events
Syntax	Description
element.addEventListener('event', fn)	Listen to event

🔑 Common Events:

click

mouseover

keydown

submit

input

change

js
Copy code
button.addEventListener('click', () => {
  alert('Button clicked!');
});
🏗️ Creating and Inserting Elements
Action	Code Example
Create element	const el = document.createElement('div');
Add text	el.textContent = 'Hello';
Append to body	document.body.appendChild(el);
Append to another el	parent.appendChild(child);

🗑️ Removing Elements
js
Copy code
element.remove();  // Remove from DOM
🧰 Useful DOM Properties
Property	Use
element.parentElement	Access parent element
element.children	Get child elements (HTMLCollection)
element.firstChild	First node (could be text)
element.nextElementSibling	Next sibling element

✅ Mini Tip: Checking if an element contains a class
js
Copy code
element.classList.contains('my-class');
"They squander their brilliance like treasure buried in the sand — wasted, forgotten, and misused."

"Most professors are for imbezzeling, mispending and slothing away their time, their opportunities and talents to do good."

