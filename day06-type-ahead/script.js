const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch cities
fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                cities.push(...data)
            });
            console.log(cities);

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
    lists = matchedPlaces.map(place => {
        // add span with class = "hl" to searchInput to highlight
        let cityName = place.city.replace(regex,`<span class="hl">${wordToMatch}</span>`)
        let stateName = place.state.replace(regex,`<span class="hl">${wordToMatch}</span>`)
        return `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${formatNumber(place.population)}</span>
            </li>`
    }).join("");

    // set list elements inside suggestions ul
    suggestions.innerHTML = lists;
}

// select suggestions ul and search input element
const suggestions = document.querySelector('.suggestions');
const searchInput = document.querySelector(".search");

// input event
searchInput.addEventListener("input",displayMatches);