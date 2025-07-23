
// inventors details array
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


// generate initial table details from array
let inventorsTable = inventors.map(inventor => {
    return `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`
}).join('');
let inventorTableBody = document.getElementById('inverntorsTableBody');
inventorsTableBody.innerHTML = inventorsTable;

const filter1500s = document.getElementById("filter1500s");
const mapNames = document.getElementById("mapNames");
const sortByBirthYear = document.getElementById("sortByBirthYear");
const countTotalYears = document.getElementById("countTotalYears");
const sortByYearsLived = document.getElementById("sortByYearsLived");
const sortByLastName = document.getElementById("sortByLastName");
const resultTable = document.getElementById("resultTable");
const resultTableBody = document.getElementById("resultTableBody");
const resultTableHead = document.getElementById("resultTableHead");
const resultCaption = document.getElementById("resultCaption");
const resultText = document.getElementById("resultText");


// function to display / hide resultTable and resultText
function displayResult(element){
    if(element === "table"){
        resultTable.style.display = "inline-block";
        resultText.style.display = "none";
    } else {
        resultTable.style.display = "none";
        resultText.style.display = "inline-block";
    }
}


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

filter1500s.addEventListener("click", function(){
// filter array
let inventors1500s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

    resultCaption.innerHTML = "Inventors Born in the 1500s";
    // generate table details
    tableBody = inventors1500s.map(inventor => {
        return `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`
    }).join('');

    resultTableBody.innerHTML = tableBody;
    displayResult("table");
})


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

mapNames.addEventListener("click", function(){
    let fullNames = inventors.map(function(inventor){
        return `${inventor.first} ${inventor.last}`
    })

    names = fullNames.map(fullname => {
        return `"${fullname}", `
    }).join('');

    resultText.innerHTML = `List of the inventors first and last names: ${names}`;
    displayResult("text");
})


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest


sortByBirthYear.addEventListener("click", function(){
    // sort array
    inventors.sort((currentPerson, nextPerson) => currentPerson.year - nextPerson.year);

    resultCaption.innerHTML = "Sorted by birth year, oldest to youngest"
    // generate table details
    let tableBody = inventors.map(inventor => {
        return `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`
    }).join('');

    resultTableBody.innerHTML = tableBody;
    displayResult("table");
})


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together

countTotalYears.addEventListener("click", function(){
    let totalYears = inventors.reduce((years,inventor) => years + ( inventor.passed - inventor.year),0);
    resultText.innerHTML = `Total years all the inventors lived all together: <span>${totalYears} years</span>`;

    displayResult("text");
})


// 5. Sort the inventors by years lived

sortByYearsLived.addEventListener("click", function(){
//sort array
inventors.sort((currentPerson,nextPerson) => {
    currentPersonLifeSpan = currentPerson.passed - currentPerson.year ;
    nextPersonLifeSpan = nextPerson.passed - nextPerson.year ;
    return currentPersonLifeSpan > nextPersonLifeSpan ? 1 : -1 ;
});

resultCaption.innerHTML = "Sortd by years lived"
// generate table details
let tableBody = inventors.map(inventor => {
    return `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`
}).join('');

resultTableBody.innerHTML = tableBody;
displayResult("table");

})


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*  -- solution --
let categories = document.querySelector('.mw-category');
let links = Array.from(categories.querySelectorAll('a'));
let names = links.map(link => link.textContent );
names = names.filter(name => name.includes('de'));
console.log("List of Boulevards in Paris that contain 'de' anywhere in the name");
console.table(names);
*/

// 7. sort Exercise
// Sort the inventors alphabetically by last name

sortByLastName.addEventListener("click", function(){
// sort array
inventors.sort((currentPerson,nextPerson) => {
    currentPersonLastName = currentPerson.last;
    nextPersonLastName = nextPerson.last;
        return currentPersonLastName > nextPersonLastName ? 1 : -1 ;
    });

    resultCaption.innerHTML = "Sorted alphabetically by last name"
    // generate table details
    let tableBody = inventors.map(inventor => {
        return `<tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td></tr>`
    }).join('');

    resultTableBody.innerHTML = tableBody;
    displayResult("table");

})


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let counts = data.reduce(function(counts,item){
    if(!counts[item]) counts[item] = 0 ;
    counts[item]++;
    return counts;
},{})
console.log("counts of each items");
console.table(counts);

