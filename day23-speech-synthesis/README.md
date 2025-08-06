# The Voiceinator 5000 – JavaScript30 Day 23

## About  
This project is part of the [JavaScript30](https://javascript30.com) challenge by [Wes Bos](https://github.com/wesbos).  
It demonstrates how to use the **Web Speech API (SpeechSynthesis)** to convert text to speech. The interface allows users to choose different voices, adjust pitch and rate, and input custom text for playback.

## What I Learned
- How to work with the **SpeechSynthesis API** to speak text aloud.
- Dynamically loading available voices with `speechSynthesis.getVoices()`.
- Handling voice selection and speech configuration (pitch, rate).
- Listening to `voiceschanged` event to populate voice options when available.
- Using `SpeechSynthesisUtterance` and controlling playback with `.speak()` and `.cancel()`.


## Live Demo  
[View the Live Project](https://m-anees-c.github.io/javascript30/day23-speech-synthesis/)
