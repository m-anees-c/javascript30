# Type Ahead – JavaScript30 Day 6

## About
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It demonstrates a live search feature that filters through a dataset of **cities and states**.  
As the user types, matching results are displayed dynamically, with the search term highlighted.


## Features
- Fetches a dataset of **US cities** using `fetch()`.
- Filters and displays city/state names that match the search query.
- Highlights the matching text inside city/state names.


## What I Learned
- Using `fetch()` to retrieve and parse JSON data.
- Applying `filter()` and regular expressions (`RegExp`)for dynamic search.
- Manipulating the DOM to display filtered results.
- Adding **event listeners** for live updates (e.g., `input` events).


## Dataset
The project uses the [US Cities dataset](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json) containing:
```json
{
  "city": "New York",
  "growth_from_2000_to_2013": "4.8%",
  "latitude": 40.7127837,
  "longitude": -74.0059413,
  "population": "8405837",
  "rank": "1",
  "state": "New York"
}
```

## Live Demo
[View the Live Project](https://m-anees-c.github.io/javascript30/day06-type-ahead/)

