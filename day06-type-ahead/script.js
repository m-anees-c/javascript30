const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch cities
fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        cities.push(...data)
});

// function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// function to find matches
function findMatches(wordToMatch, cities){

    let regex = new RegExp(wordToMatch,'gi');

    return cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
}



// function to dsiplay matched places
function displayMatches(){

    let wordToMatch = this.value;
    let regex =  RegExp(wordToMatch,'gi');
    // find matches and save to matchedPlaces array
    let matchedPlaces = findMatches(wordToMatch, cities);

    // get html lists elements as string
    lists = matchedPlaces.map((place, index) => {
    // add span with class = "hl" to searchInput to highlight
    let cityName = place.city.replace(regex,`<span class="hl">${wordToMatch}</span>`)
    let stateName = place.state.replace(regex,`<span class="hl">${wordToMatch}</span>`)
    return `<li data-index="${index}">
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${formatNumber(place.population)}</span>
        </li>`
    }).join("");

    // set list elements inside suggestions ul
    suggestions.innerHTML = lists;

    let results = suggestions.querySelectorAll('li');
    results.forEach((list,index) => {
        list.addEventListener("click", function(){
        let place = matchedPlaces[index];
        let city = place.city;
        let growth = place.growth_from_2000_to_2013;
        let latitude = place.latitude;
        let longitude = place.longitude;
        let population = place.population;
        let rank = place.rank;
        let state = place.state;
        let popupContentHTML =  `<ul>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Growth (2000 - 2013):</strong> ${growth}</li>
            <li><strong>Latitude:</strong> ${latitude}</li>
            <li><strong>Longitude:</strong> ${longitude}</li>
            <li><strong>Population:</strong> ${population}</li>
            <li><strong>Rank:</strong> ${rank}</li>
            <li><strong>State:</strong> ${state}</li>
            </ul>`;
        popupContent.innerHTML = popupContentHTML;
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
        })
    })
}

// select popup elements
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const closeButoon = document.querySelector('.close-button');

// popup close button event 
closeButoon.addEventListener("click", function(){
    popup.style.display = "none";
    document.body.style.overflow = "";
})

// select suggestions ul and search input element
const suggestions = document.querySelector('.suggestions');
const searchInput = document.querySelector(".search");

// input event
searchInput.addEventListener("input",displayMatches);