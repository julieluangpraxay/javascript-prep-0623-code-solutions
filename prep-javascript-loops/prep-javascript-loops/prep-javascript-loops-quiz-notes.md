# prep-javascript-loops-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the **condition** expression in the `for` and `while` loops?

The condition expression in the for and while loops serves as the controlling mechanism to determine whether the loop should continue iterating or terminate. It is a boolean expression that is evaluated before each iteration of the loop.

In a for loop, the condition is specified within the parentheses after the initialization and before the increment/decrement expressions. For example:

javascript
Copy code
for (initialization; condition; increment/decrement) {
// loop body
}
In a while loop, the condition is specified within the parentheses following the while keyword. For example:

javascript
Copy code
while (condition) {
// loop body
}

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?

the initialization expression (let i = 0) initializes the loop control variable i to 0. It is evaluated only once before the loop starts executing.
The initialization expression allows you to set up any necessary variables or perform any required setup before the loop begins. It is not mandatory to include an initialization expression in a for loop, but it provides a convenient place to initialize loop control variables.

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?
  The second expression in the parentheses for a for loop, known as the condition, is evaluated before the start of each iteration. It determines whether the loop body should be executed or if the loop should terminate.
  If the condition is initially false, the loop body will not be executed at all. If the condition is initially true, the loop body will execute, and after each iteration, the condition will be evaluated again.

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?
  The final expression shows the increment or decrement of the index. "i++ or i--"

- What is the purpose of the **final expression** in a `for` loop?
  Incrementing or decrementing the loop control variable: This allows you to control the iteration count or track the progress of the loop.
  Modifying other variables or performing additional calculations: You can update other variables or perform any necessary computations based on the loop logic.

- What types of data should the `for...in` loop be used on?

he for...in loop in JavaScript is used to iterate over the enumerable properties of an object.
It allows you to access and perform operations on each property of the object.
By using the for...in loop, you can access the properties of an object and work with their corresponding values.

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
