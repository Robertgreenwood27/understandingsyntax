// items.js
const items = [
    {
        title: "Number",
        code: "const num = 42;",
        description: "A data type for representing both integer and floating-point numbers.",
        realLifeExample: "Consider the age of a person, which could be represented as a number.",
        category: "Data Types"
      },
      {
        title: "String",
        code: "const str = \"Hello, world!\";",
        description: "A data type for representing sequences of characters.",
        realLifeExample: "Your name is a string of characters.",
        category: "Data Types"
      },
      {
        title: "Boolean",
        code: "const flag = true;",
        description: "A data type that represents true or false.",
        realLifeExample: "A light switch can be either on or off, similar to a Boolean.",
        category: "Data Types"
      },
      {
        title: "If-Else Statement",
        code: "if (x > 10) { console.log('x is greater'); } else { console.log('x is smaller'); }",
        description: "Executes a block of code if a specified condition is true; otherwise, it executes another block.",
        realLifeExample: "If it's raining, you bring an umbrella; otherwise, you don't.",
        category: "Control Structures"
      },
      {
        title: "Switch Statement",
        code: "switch(x) { case 0: console.log('zero'); break; default: console.log('other'); }",
        description: "Selects one of many code blocks to be executed.",
        realLifeExample: "Choosing a travel route based on the current traffic conditions.",
        category: "Control Structures"
      },
      {
        title: "For Loop",
        code: "for (let i = 0; i < 5; i++) { console.log(i); }",
        description: "A 'for' loop repeats until a specified condition evaluates to false.",
        realLifeExample: "Imagine you have to fill individual bags with five apples each...",
        category: "Loops and Iteration"
      },
      {
        title: "For...Of Loop",
        code: "for (const element of [1, 2, 3]) { console.log(element); }",
        description: "Iterates over iterable objects like arrays, strings, etc.",
        realLifeExample: "Going through each item on your shopping list.",
        category: "Loops and Iteration"
      },
      {
        title: "Function Declaration",
        code: "function greet(name) { return `Hello, ${name}!`; }",
        description: "Declares a function you can call by name later in your code.",
        realLifeExample: "Imagine a recipe that you can follow to bake a cake.",
        category: "Functions"
      },
      {
        title: "Arrow Function",
        code: "const greet = name => `Hello, ${name}!`;",
        description: "An alternative way to define a function.",
        realLifeExample: "A vending machine that takes coins and outputs a snack is like a function. An arrow function is just a different type of machine.",
        category: "Functions"
      },
      {
        title: "Object Literals",
        code: "const person = { name: 'Alice', age: 30 };",
        description: "An object is a collection of properties, represented as key-value pairs.",
        realLifeExample: "A person can have attributes like name, age, etc., organized as an object.",
        category: "Objects and Prototypes"
      },
      {
        title: "Prototypes",
        code: "function Car(make) { this.make = make; } Car.prototype.honk = function() { console.log('Honk!'); };",
        description: "Prototypes allow you to easily define methods to all instances of a particular object.",
        realLifeExample: "All cars have the ability to honk, but the sound they make could differ by make and model.",
        category: "Objects and Prototypes"
      },
    {
      title: "While Loop",
      code: "let i = 0; while (i < 5) { console.log(i); i++; }",
      description: "A 'while' loop continues as long as a specified condition is true.",
      realLifeExample: "Imagine you're eating popcorn and continue eating until the bowl is empty...",
      category: "Loops and Iteration"
    },
    {
      title: "Array",
      code: "const arr = [1, 2, 3, 4, 5];",
      description: "An array is a data structure that can hold more than one value at a time.",
      realLifeExample: "Think of a multi-slot mailbox that can hold multiple letters...",
      category: "Data Types"
    }
  ];
  
  export default items;
  