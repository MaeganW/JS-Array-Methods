const philosophers = [
    "Theodor Adorno",
    "Thomas Aquinas",
    "Hannah Arendt",
    "Aristotle",
    "Augustine",
    "Francis Bacon",
    "Roland Barthes",
    "Georges Bataille",
    "Jean Baudrillard",
    "Simone de Beauvoir",
    "Walter Benjamin",
    "George Berkeley"
];

const pets = [
    {name: "Buttercup", animal: "dog", color: "brown", age: 3},
    {name: "Daisy", animal: "dog", color: "yellow", age: 10},
    {name: "Boots", animal: "cat", color: "brown", age: 5},
    {name: "Patches", animal: "cat", color: "orange", age: 2},
    {name: "Talcum", animal: "sheep", color: "white", age: 6},
    {name: "Chip", animal: "hen", color: "brown", age: 2},
];

const comments = [
    { text: 'lol', id: 342901 },
    { text: 'I O U', id: 342902 },
    { text: 'Ikr', id: 342903 },
    { text: 'ttfn', id: 342904 },
    { text: 'C U', id: 342905 },
]

const people = [
    { name: 'Jane', year: 1987 },
    { name: 'Nick', year: 1955 },
    { name: 'Kyle', year: 1976 },
    { name: 'Jesse', year: 2009 },
]


// Filter
const brownPets = pets.filter(pet => pet.color === 'brown');
console.table(brownPets);


// Map
const nameAndAnimal = pets.map(pet => `${pet.name} the ${pet.animal}`);
console.log(nameAndAnimal);


// Sort
const orderedByEldest = pets.sort((a,b) => (a.age < b.age) ? 1 : -1);
console.table(orderedByEldest);

const alpha = philosophers.sort((lastOne, nextOne) => {
    const aSplit = lastOne.split(' ');
    const aLast = aSplit[aSplit.length - 1];

    const bSplit = nextOne.split(' ');
    const bLast = bSplit[bSplit.length - 1];

    return aLast > bLast ? 1 : -1;
});
console.log(alpha);


// Reduce
const totalYears = pets.reduce((total, pet) => {
    return total + pet.age;
}, 0);
console.log(totalYears);

const numberPerSpecies = pets.reduce((obj, pet) => {
    if(!obj[pet.animal]) {
        obj[pet.animal] = 0;
    }
    obj[pet.animal]++;
    return obj;
}, {});
console.log(numberPerSpecies);


// Some
const someAdults = people.some( person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 20;
});
console.log({someAdults});  // true


// Every
const allAdults = people.every(person => (
    (new Date()).getFullYear() - person.year >= 20
));
console.log({allAdults});  // false


// Find
const comment = comments.find(comment => comment.id === 342901);
console.log(comment);


// FindIndex
const index = comments.findIndex(comment => comment.id === 342902);
console.log('index of comment to be deleted: ', index);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(comments);
console.table(newComments);