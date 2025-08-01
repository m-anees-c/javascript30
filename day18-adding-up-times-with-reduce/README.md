# Adding Up Times with Reduce – JavaScript30 Day 18

## About  
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It demonstrates how to **use `Array.prototype.reduce()`** to calculate the **total video watch time** from a list of videos, where each video duration is stored in a `data-time` attribute in the format `"minutes:seconds"`.

## What I Learned  
- Converting `NodeList` to an `Array` using `Array.from()` to apply array methods.
- Extracting data from `data-*` attributes.
- Parsing time strings (e.g., `"5:43"`) into total seconds using `split(':')` and `parseFloat`.
- Using `reduce()` to accumulate the total time in seconds.
- Converting total seconds into `hours`, `minutes`, and `seconds`.

## How It Works  
1. Select all elements with the `data-time` attribute.
2. Extract and convert each time string into total seconds.
3. Use `reduce()` to get the grand total of all video durations.
4. Convert the total seconds into hours, minutes, and seconds for readable output.
5. Display or log the final time.

## Example Output  
```bash
Total : 1:37:12
```

## Live Demo  
[View the Live Project](https://m-anees-c.github.io/javascript30/day18-adding-up-times-with-reduce/)