#Function

A **function** is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object.

A function name is an identifier declared as part of a function declaration or function expression. The function name's scope depends on whether the function name is a declaration or expression.

Different types of functions

An anonymous function is a function without a function name:
```javascript

function () {}
```
An **inner function** is a function inside another function (square in this case). An **outer function** is a function containing a function (addSquares in this case):
```javascript

function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
}
```
A **recursive function** is a function that calls itself. See recursion.
```javascript

function loop(x) {
   if (x >= 10)
      return;
   loop(x + 1);
}
    ```

An **Immediately Invoked Function Expressions** (IIFE) is a function that is called directly after the function is loaded into the browser’s compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s declaration.  There are many advantages of this type of function expression, but that is out of the scope of the course.

```javascript
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() { 
    console.log('Hello Foo'); 
}();
*/

(function foo() {
    console.log("Hello Foo");
}());
// Douglas Crockford's style


(function food() {
    console.log("Hello Food");
})();
```
##### Source
https://developer.mozilla.org/en-US/docs/Glossary/Function
