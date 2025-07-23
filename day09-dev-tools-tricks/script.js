const developers = [
    { name: 'Alice', language: 'JavaScript', experience: 5 },
    { name: 'Bob', language: 'Python', experience: 3 },
    { name: 'Charlie', language: 'C++', experience: 4 },
    { name: 'Diana', language: 'Java', experience: 6 },
    { name: 'John', language: 'JavaScript', experience: 5 }
];

// style console messages
console.log("%cDevTool Tricks","color: white; background-color: black; padding: 5px; text-decoration: underline;");

// error, warning, and info messages
console.warn("This is warning message");
console.error("This is error message")
console.info("This is info");

// assretion check
let a = 5 ; b = 6 ;
console.assert(a > b,"a is not greater than b");

// display table
console.log("\nArray as table 👇");
console.table(developers);

// gorup console outputs
console.log("\nDevelopers data as groups 👇");
developers.forEach(developer => {
    console.groupCollapsed("Developer: ",developer.name);
    console.log("Dev Language",developer.language);
    console.log("Experience",developer.experience);
    console.groupEnd("developer");
    if(developer.language === "JavaScript"){
        console.count("Number of Javascript developers");
    }
});



// time
console.time("\nTime to loop 10000 times");
let count = 1;
for(let i = 0 ; i < 10000; i++){
    count++ ;
}
console.timeEnd("\nTime to loop 10000 times");

// count occurrences
console.log("\nCount Occurrences")
console.count("John");
console.count("John");
console.count("Bob");
console.count("John");