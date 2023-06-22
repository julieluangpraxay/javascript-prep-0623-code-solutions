# prep-javascript-operators-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What data type is returned by an arithmetic operation?
  In JavaScript, the data type returned by an arithmetic operation depends on the specific operation and the data types of the operands involved. Here are some common scenarios:

Addition (+): If both operands are numbers or numeric strings, the result will be a number. However, if one of the operands is a string, JavaScript performs concatenation, and the result will be a string.

Subtraction (-), multiplication (\*), and division (/): These arithmetic operations typically return a number. If any of the operands are floating-point numbers, the result will be a floating-point number.

Modulus (%): This operation returns the remainder of an integer division. The result will always be a number.

Unary plus (+) and unary minus (-): These operations preserve the data type of the operand. For example, if the operand is a number, the result will be a number. If the operand is a string that can be converted to a valid number, the result will be a number. Otherwise, the result will be NaN (Not a Number).

Division (/) between two integers in JavaScript returns a floating-point number, even if the division yields a whole number. For example, 5 / 2 would result in 2.5 instead of 2.

- What is string concatenation?
  String concatenation is the process of combining two or more strings together to create a single string. In JavaScript, the + operator is used for string concatenation when one or more of the operands are strings.

example:
let firstName= Julie
let lastName= L

let fullName = firstName + lastName;
console.log(fullName);

- What purpose(s) does the `+` plus operator serve in JavaScript?
  It is used for string concatenation when one or more of the operands are strings.

- What data type is returned by comparing two values (`<`, `>`, `===`, etc)?
  When comparing two values in JavaScript using comparison operators such as <, >, ===, and others, the data type returned is always a Boolean.

A Boolean data type represents either true or false, indicating the result of the comparison. The comparison operators evaluate the relationship between the operands and return true if the comparison is true, and false if it is false.

ex:

let a = 5;
let b = 10;

console.log(a < b); // Output: true
console.log(a > b); // Output: false
console.log(a === b); // Output: false

- What does the `+=` "plus-equals" operator do?
  The += operator is called the "plus-equals" or "addition assignment" operator in JavaScript. It is a shorthand operator that combines addition and assignment into a single operation. It performs the addition of the right-hand operand to the left-hand operand and then assigns the result back to the left-hand operand.

Ex:

let number = 5;
number += 3;
console.log(number); // Output: 8

and with a string ex:

let greeting = "Hello";
greeting += " World";
console.log(greeting); // Output: "Hello World"

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
