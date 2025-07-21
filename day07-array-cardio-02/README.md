# Array Cardio 02 – JavaScript30 Day 7

## About
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It focuses on mastering array methods like `some()`, `every()`, `find()`, and `findIndex()` by working with sample datasets of people and comments.

Unlike the first Array Cardio, which emphasized `filter`, `map`, and `reduce`, this exercise demonstrates **boolean checks**, **searching for elements**, and **removing items from arrays**.


## What I Learned
- Practical use of `some()` and `every()` for array-wide checks.
- How `find()` differs from `filter()` (returns a single item instead of an array).
- Using `findIndex()` with `slice()` or `splice()` to remove items cleanly.
- Creating new arrays with the **spread operator (`...`)**.
- Styling console logs for improved debugging (`console.log('%c', 'CSS')`).

## Dataset
The code uses two sample arrays:
```js
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
```

## Live Demo
[View the Live Project](https://m-anees-c.github.io/javascript30/day07-array-cardio-02/)
