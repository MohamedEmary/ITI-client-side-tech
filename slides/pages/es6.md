## `"use strict"`

- Early JavaScript was very forgiving-easy to write, but easy to make mistakes!
- Common issues:
    - Undeclared variables: `x = 5;`
    - Duplicate parameters: `function sum(x, x) {}`
    - Reserved words as names: `var let = 5;`
- **Strict mode** (ES5+): catches these errors early.
- Enable with:

```js
"use strict";
```

- Place at the top of a script or function.
- Classes and modules are always strict by default.

---

## Hoisting

- JavaScript moves variable and function declarations to the top of their scope during compilation.
- Only declarations are hoisted, not initializations.

```js
console.log(a); // undefined
var a = 10;
```

- If you use a variable without declaring it, you'll get an error:

```js
console.log(a); // ReferenceError
```

---

### Hoisting with Functions

- Function declarations are hoisted, so you can call them before their definition:

```js
greet("World");
function greet(name) {
    console.log("Hello " + name);
}
```

- Function expressions are NOT hoisted (only the variable is):

```js
// Error: greet is not a function
greet("World");
var greet = function (name) {
    console.log("Hello " + name);
};
```

---

## Scope

- **Scope**: Where a variable is accessible.
- Two main types: **global** and **local** (function) scope.

### Global Scope

- Declared outside any function/block; accessible everywhere.

```js
var a = 10;
function getNum() {
    console.log(a); // 10
}
getNum();
```

---

### Local Scope

- Declared inside a function; only accessible there.

```js
function getNum() {
    var a = 10;
}
console.log(a); // ReferenceError
```

- Functions can access global variables, but not vice versa.

---

### `var` and Block Scope

- `var` is NOT block-scoped (only function-scoped):

```js
if (true) {
    var x = 5;
}
console.log(x); // 5
```

- Only functions create a new scope for `var`.

---

## Scope & Hoisting: Quiz Examples

### Example 1

```js
var a = 10;
function myFunction() {
    var a = 20;
    console.log(a);
}
myFunction();
console.log(a);
```

---

### Example 2

```js
var a = 10;
function myFunction() {
    console.log(a);
    a = 20;
}
myFunction();
console.log(a);
```

---

### Example 3

```js
var a = 10;
function myFunction() {
    console.log(a);
    var a = 20;
}
myFunction();
console.log(a);
```

---

### Example 4

```js
function foo() {
    function bar() {
        return 3;
    }
    function bar() {
        return 8;
    }
    return bar();
}
console.log(foo());
```

---

### Example 5

```js
function foo() {
    var bar = function () {
        return 3;
    };
    return bar();
    var bar = function () {
        return 8;
    };
}
console.log(foo());
```

---

### Example 6

```js
function foo() {
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());
```

---

### Example 7

```js
function foo() {
    return bar();

    function bar() {
        return 3;
    }
    var bar = function () {
        return 8;
    };
}
console.log(foo());
```

---

### Example 8

```js
console.log(foo());
var foo = function () {
    return bar();
    function bar() {
        return 3;
    }
    var bar = function () {
        return 8;
    };
};
```

---

### Self Inovked Function

JS developers tried to avoid global scope pollution by using self-invoked functions (IIFE).

IIFEs create a new scope for our code so we can use variables without polluting the global scope.

```js
(function () {
    // function body
})();
```

---

# ECMAScript 6 (ES6)

---

## `let` & `const`

- `let` and `const` are new ways to declare variables (ES6).
- `let`: block-scoped, cannot redeclare in same scope.
- `const`: block-scoped, cannot be reassigned.
- `var`: function-scoped (avoid in modern JS).

---

```js
{
    let x = 5;
    var y = 10;
    // x only inside block, y is global
}
// console.log(x); // Error
console.log(y); // 10

let a = 40;
// let a = 45; // Error
const z = 20;
// z = 30; // Error
```

---

### Temporal Dead Zone (TDZ)

- `let`/`const` are not accessible before declaration.

```js
console.log(x); // ReferenceError
let x = 5;
```

---

## for...of & const

- `const` works in `for...of` because each loop creates a new block scope.

```js
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);
}
```

> Use `let` or `const`-avoid `var`!

---

## Default Parameters

- Set default values for function parameters.

```js
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, World!
```

- Old way:

```js
function greet(name) {
    name = name || "World";
}
```

---

## Template Literals

- Use backticks (`` ` ``) for flexible strings.
- Embed variables: `${expression}`
- Multiline support.

```js
let name = "Mohamed";
let age = 30;
let msg = `Hello, ${name}! You are ${age} years old.`;
```

---

## Destructuring Assignment

### Array Destructuring

```js
let [a, b, c] = [1, 2, 3];
let [x, , y] = [1, 2, 3]; // skip
let [first, ...rest] = [1, 2, 3, 4];
```

### Object Destructuring

```js
let person = { name: "Mohamed", age: 30 };
let { name, age } = person;
let { name: n, age: a } = person;
```

---

## The `this` Keyword

- In a method: `this` = the object
- In a function (non-strict): `this` = global object
- In a function (strict): `this` = undefined
- In event handlers: `this` = the element

```js
let person = {
    firstName: "Mohamed",
    lastName: "Ahmed",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
```

---

## Arrow Functions

- Shorter syntax for functions
- No own `this`-inherits from parent scope

```js
let add = (a, b) => a + b;
let square = (x) => x * x;
let greet = () => "Hello!";
```

---

### Arrow Functions & `this`

- Arrow functions solve `this` issues in nested functions.

```js
let obj = {
    getThis: function () {
        let inner = () => console.log(this);
        inner();
    },
};
```

---

## Set

- Collection of **unique values**
- No duplicates allowed

```js
let set = new Set([1, 2, 3, 1]);
set.add(4);
set.has(2); // true
set.delete(1);
set.size; // 3
```

- Convert to array: `Array.from(set)`

---

## Map

- Collection of **key-value pairs**
- Keys can be any type
- Maintains insertion order

```js
let map = new Map([
    ["name", "Mohamed"],
    ["age", 30],
]);
map.set("city", "Cairo");
map.get("name"); // Mohamed
map.delete("age");
map.size; // 2
```

- Convert object to map: `new Map(Object.entries(obj))`
- Convert map to object: `Object.fromEntries(map)`

---

## Map Iteration

```js
for (const [key, value] of map) {
    console.log(key, value);
}
```
