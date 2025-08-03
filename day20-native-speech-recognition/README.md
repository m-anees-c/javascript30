# Speech Detection – JavaScript30 Day 20

## About  
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It showcases how to use the **Web Speech API** to create a simple **speech-to-text** interface. The spoken words are converted into text in real-time and dynamically added to the page.

## What I Learned  
- Using the **Web Speech API** via `SpeechRecognition` (or `webkitSpeechRecognition` fallback).
- Handling speech results through the `result` event and accessing the `transcript`.
- Understanding how interim results work for live dictation-style feedback.
- Managing DOM elements dynamically by appending `<p>` tags for final speech blocks.
- Restarting speech recognition automatically on the `end` event to allow continuous listening.


## Live Demo  
[View the Live Project](https://m-anees-c.github.io/javascript30/day20-native-speech-recognition/)