# prep-javascript-arrays-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the principal use of arrays?
  An array is a special variable, which can hold more than one value:
  const cars = ["Saab", "Volvo", "BMW"];

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

- Describe the syntax (structure) of array-literals in JavaScript.
  The array literal is represented by square brackets ([]).
  Within the square brackets, you can include a comma-separated list of values, which will become the elements of the array. For example: [value1, value2, value3].
  The elements of an array can be of any data type, including numbers, strings, objects, other arrays, or even a mix of different types.
  Elements in an array are ordered, meaning they have a specific index associated with them. The index starts from 0 for the first element, 1 for the second element, and so on.
  You can access individual elements in an array using square brackets notation along with the index of the element. For example: myArray[0] would access the first element of the array called myArray.
  The array can be empty, meaning it doesn't contain any elements. An empty array is represented as [].
  You can also use array literals to initialize arrays when declaring variables. For example: const myArray = [value1, value2, value3];.

- What number represents the **first** index of an array?
  Array indices are zero-based, which means the first element of an array is accessed using the index 0.

- How can you access the last element of an array?
  Accessing the Last Array Element Example:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fruit = fruits[fruits.length - 1];

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
