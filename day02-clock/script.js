const hand = document.querySelector('.hand');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital-clock');
const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const searchResults = document.querySelector('.result');
const resultTexts = document.getElementsByClassName('resultText');
const searchInput = document.getElementById('timeZone');
// Function To Set Time in Clocks
function setTime() {
  date = new Date();
  let selectedTimeZone = localStorage.getItem('selectedTimeZone');
  if (!selectedTimeZone) selectedTimeZone = defaultTimeZone;
  let options = {
    timeZone: selectedTimeZone, // Set the timezone to selectedTimeZone
    hour: '2-digit', // two-digit hour format (e.g., "07" instead of "7")
    minute: '2-digit', // two-digit minute format
    second: '2-digit', // two-digit second format
    hour12: true // 12 hour format
  };
  let formatter = new Intl.DateTimeFormat('en-US', options);
  let specificTime = formatter.format(date);
  let [hour, minute, second] = specificTime.split(":");
  let timePeriod = second.split(" ")[1]; // get AM or PM
  second = second.split(" ")[0]; // remove AM or PM from seconds
  // display selected Time Zone
  let timeZoneText = document.querySelector('.timeZone');
  timeZoneText.innerHTML = `Time Zone : ${selectedTimeZone}`;
  // transition style
  hand.style.transition = "all 0.1s cubic-bezier(0.25, 0.1, 0.23, 3.32)";
  // move hands based on current time 
  secondHand.style.transform = `rotate(${((second / 60) * 360) + 90}deg)`;
  minuteHand.style.transform = `rotate(${((minute / 60) * 360) + 90}deg)`;
  hourHand.style.transform = `rotate(${((hour / 12) * 360) + 90}deg)`;
  // update digital clock time
  digitalClock.innerHTML = `${hour}:${minute}:${second} ${timePeriod}`;
}

// update time on each seconds
setInterval(setTime, '1000');

// get all supported time zones
let timeZones = Intl.supportedValuesOf('timeZone');
timeZones = timeZones.splice(",");

// create search results for time zones
timeZones.forEach(element => {
  let resultSpan = document.createElement("span");
  resultSpan.textContent = element;
  resultSpan.classList.add("resultText");
  searchResults.appendChild(resultSpan);
});

// Display search results based on user input
searchInput.addEventListener("keyup", function() {
  searchResults.style.display = "block";
  let searchValue = searchInput.value.toLowerCase();
  for (result of resultTexts) {
    resultValue = result.textContent.toLowerCase();
    if (resultValue.includes(searchValue)) {
      result.style.display = "block";
      result.addEventListener("click", function() {
      localStorage.setItem('selectedTimeZone', this.textContent);
      searchResults.style.display = "none";
      });
    } else {
      result.style.display = "none";
    }
  }
  window.addEventListener("click", function() {
    searchResults.style.display = "none";
  })
})
