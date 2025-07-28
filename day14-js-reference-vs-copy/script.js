
console.log("%cJavaScript Reference Vs Copy","color:white; background-color: black; padding: 5px; border-radius: 5px;")

let consoleMessage = `
start with strings, numbers and booleans

    let name = "Mohammed";
    let name2 = name;

    console.log(name,name2);

    name2 = "Anees";

    console.log(name,name2);

This will output as follows :
`;

console.log(consoleMessage);

let name = "Mohammed";
let name2 = name;
console.log(name,name2);
name2 = "Anees";
console.log(name,name2);

consoleMessage = `
Let's say we have an array

    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

and we want to make a copy of it.

You might think we can just do something like this:

    let team = players;

however what happens when we update that array?

    team[3] = "Anees";
    console.log(team);

`;

console.log(consoleMessage);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

let team = players;

team[3] = "Anees";
console.log(team);

consoleMessage = `
now here is the problem!

    console.log(players);

`;
console.log(consoleMessage);


console.log(players);

consoleMessage = `
oh no - we have edited the original array too!

Why? It's because that is an array reference, not an array copy. They both point to the same array!

So, how do we fix this? We take a copy instead!

one way

    let team2 = players.slice();
    team2[3] = "John";

    console.log(team2);

`;

console.log(consoleMessage);

// one way

let team2 = players.slice();
team2[3] = "John";
console.log(team2);

consoleMessage = `
or create a new array and concat the old one in

    let team3 = [].concat(players);
    team3[3] = "Bos";

    console.log(team3);

`;
console.log(consoleMessage);

// or create a new array and concat the old one in
let team3 = [].concat(players);
team3[3] = "Bos";
console.log(team3);

consoleMessage = `
or use the new ES6 Spread

    let team4 = [...players];
    team4[3] = "Tony";

    console.log(team4);

`;
console.log(consoleMessage);

// or use the new ES6 Spread

let team4 = [...players];
team4[3] = "Tony";

console.log(team4);

consoleMessage = `
now when we update it, the original one isn't changed

    console.log(players);

`;

console.log(consoleMessage);
// now when we update it, the original one isn't changed

console.log(players);


consoleMessage = `
The same thing goes for objects, let's say we have a person object

    const person = {
    name: 'Wes Bos',
    age: 80
    };

and think we make a copy:

    let employee = person;
    employee.age = 90;

    console.log(person);

`;
console.log(consoleMessage);

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
let employee = person;
employee.age = 90;
console.log(person);

consoleMessage = `
We edited the original object too!

how do we take a copy instead?

    let employee2 = Object.assign({}, person, {age: 100});

    console.log(employee2);

`
console.log(consoleMessage);


let employee2 = Object.assign({}, person, {age: 100});

console.log(employee2);

consoleMessage = `
Object ...spread

    let employee3 = {...person};
    employee3.age = 99;

    console.log(employee3);

`;
console.log(consoleMessage);

// Object ...spread

let employee3 = {...person};
employee3.age = 99;

console.log(employee3);

console.log(`
Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
`);
