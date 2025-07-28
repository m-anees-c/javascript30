# JS Reference vs Copy – JavaScript30 Day 14

## About  
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It explores how **primitive** values (like strings, numbers, and booleans) are copied by **value**, while **objects** and **arrays** are copied by **reference** in JavaScript.  
The example demonstrates how mutations affect original variables and how to correctly create **shallow copies** to avoid unintended side effects.

## What I Learned
- **Copy by Value** for strings, numbers, booleans.
- **Copy by Reference** for arrays and objects.
- Copying arrays using:
  - `slice()`
  - `concat()`
  - **ES6 Spread syntax** (`[...]`)
- Copying objects using:
  - `Object.assign({}, obj)`
  - **ES6 Spread syntax** (`{...obj}`)
- Importance of understanding shallow vs deep copies.

## Live Demo  
[View the Live Project](https://m-anees-c.github.io/javascript30/day14-js-reference-vs-copy/)
