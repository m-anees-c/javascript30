# Type Ahead – JavaScript30 Day 6

## About
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It implements a live, client-side search that filters a dataset of **US cities and states**.  
Results update as the user types, with matching text highlighted and an optional detail popup for each result.

## Features
- Fetches and caches a dataset of US cities via `fetch()`
- Live filtering as the user types (case-insensitive)
- Highlights matched substrings in city and state names
- Click a result to view a **popup** with detailed city info (growth, lat/long, population, rank)

## What I Learned
- Using `fetch()` and spreading fetched data into a local array
- Building dynamic, regex-based filtering with `RegExp(..., 'gi')`
- Highlighting matched substrings by wrapping them in span elements
- Formatting large numbers using a regex replacement
- Attaching event listeners to dynamically generated list items
- Managing a simple popup (show/hide) pattern with JavaScript and class/state control

## Dataset
The project uses the public [US Cities dataset](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json) containing objects like:
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

