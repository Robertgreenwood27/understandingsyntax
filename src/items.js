// items.js
const items = [
    {
      title: "For Loop",
      code: "for (let i = 0; i < 5; i++) { console.log(i); }",
      description: "A 'for' loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop."
    },
    {
      title: "While Loop",
      code: "let i = 0; while (i < 5) { console.log(i); i++; }",
      description: "A 'while' loop executes its statements as long as a specified condition evaluates to true."
    },
    {
      title: "Function Declaration",
      code: "function myFunction(p1, p2) { return p1 * p2; }",
      description: "A JavaScript function is defined with the 'function' keyword, followed by a name, followed by parentheses ()."
    },
    {
      title: "Arrow Function",
      code: "const myFunction = (p1, p2) => { return p1 * p2; }",
      description: "Arrow functions allow a short syntax for writing function expressions."
    },
    {
      title: "Switch Statement",
      code: `switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }`,
      description: "The 'switch' statement is used to perform different actions based on different conditions."
    },
    {
      title: "If...Else Statement",
      code: `if (condition) {
    // block of code to be executed if the condition is true
  } else {
    // block of code to be executed if the condition is false
  }`,
      description: "The 'if' statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed."
    },
    {
      title: "Array.map()",
      code: "const numbers = [1, 2, 3, 4]; const doubles = numbers.map(item => item * 2);",
      description: "'map()' creates a new array with the results of calling a provided function on every element in the calling array."
    },
    {
      title: "Array.filter()",
      code: "const numbers = [1, 2, 3, 4]; const evens = numbers.filter(item => item % 2 === 0);",
      description: "'filter()' creates a new array with all elements that pass the test implemented by the provided function."
    },
    {
        title: "Array.reduce()",
        code: "const numbers = [1, 2, 3, 4]; const sum = numbers.reduce((total, item) => total + item, 0);",
        description: "'reduce()' executes a reducer function on each element of the array, resulting in a single output value."
      },
      {
        title: "Array.forEach()",
        code: "const numbers = [1, 2, 3, 4]; numbers.forEach(item => console.log(item));",
        description: "'forEach()' executes a provided function once for each array element."
      },
      {
        title: "Spread Operator",
        code: "const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5];",
        description: "The spread operator '...' allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
      },
      {
        title: "Destructuring Assignment",
        code: "const [a, b] = [1, 2]; const {c, d} = {c: 3, d: 4};",
        description: "The destructuring assignment syntax allows a JavaScript expression to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals."
      },
      {
        title: "Object Property Shorthand",
        code: "const a = 'foo', b = 42, c = {}; const o = {a, b, c};",
        description: "ES6 introduced a shorthand notation for initializing object properties from variables when the property name is the same as the variable name."
      },
      {
        title: "Template Literals",
        code: "const a = `string text ${expression} string text`;",
        description: "Template literals are string literals allowing embedded expressions, multi-line strings, string interpolation features, and more."
      },
      {
        title: "Promise",
        code: `const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });`,
        description: "The 'Promise' object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
      },
      {
        title: "Async/Await",
        code: `async function exampleFunction() {
    const result = await doSomethingAsync();
    console.log(result);
  }`,
        description: "'async' and 'await' make asynchronous code look and behave a little more like synchronous code. This is where 'async' functions come in – they're a higher-level abstraction over promises."
      },
      {
        title: "Ternary Operator",
        code: "const status = age >= 18 ? 'adult' : 'minor';",
        description: "The ternary operator is a shortcut for the 'if' statement and is also known as the conditional operator."
      },
      {
        title: "Nullish Coalescing Operator",
        code: "const foo = null ?? 'default string';",
        description: "The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand."
      },
      {
        title: "Optional Chaining",
        code: "const value = obj?.property;",
        description: "The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid."
      },
      {
        title: "Modules (import/export)",
        code: `// lib.js
        export const sqrt = Math.sqrt;
        export function square(x) {
          return x * x;
        }
        // main.js
        import { square, sqrt } from 'lib';`,
        description: "ES6 modules are a way to include modules — that is, standalone JavaScript programs — into other JavaScript programs."
      },
      {
        title: "Classes",
        code: `class Rectangle {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }
        }`,
        description: "Classes in JavaScript are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript."
      },
      {
        title: "Try...Catch",
        code: `try {
          nonExistentFunction();
        } catch (error) {
          console.error(error);
        }`,
        description: "The 'try' statement lets you test a block of code for errors. The 'catch' statement lets you handle the error. The 'throw' statement lets you create custom errors."
      },
      {
        title: "Fetch API",
        code: `fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => console.log(data));`,
        description: "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses."
      },
      {
        title: "Set",
        code: `const mySet = new Set();
        mySet.add(1);
        mySet.add(5);`,
        description: "The 'Set' object lets you store unique values of any type, whether primitive values or object references."
      },
      {
        title: "Map",
        code: `const myMap = new Map();
        myMap.set('key', 'value');
        myMap.get('key');`,
        description: "The 'Map' object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value."
      }
  ];
  
  export default items;
  