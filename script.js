const philosophers = ["Theodor Adorno", "Thomas Aquinas", "Hannah Arendt", "Aristotle", "Augustine", "Francis Bacon", "Roland Barthes", "Georges Bataille", "Jean Baudrillard", "Simone de Beauvoir", "Walter Benjamin", "George Berkeley"];
const pets = [
    {name: "Buttercup", animal: "dog", color: "brown", age: 3},
    {name: "Daisy", animal: "dog", color: "yellow", age: 10},
    {name: "Boots", animal: "cat", color: "brown", age: 5},
    {name: "Patches", animal: "cat", color: "orange", age: 2},
    {name: "Talcum", animal: "sheep", color: "white", age: 6},
    {name: "Chip", animal: "hen", color: "brown", age: 2},
];

const brownPets = pets.filter(pet => pet.color === 'brown');
console.table(brownPets);

const nameAndAnimal = pets.map(pet => `${pet.name} the ${pet.animal}`);
console.log(nameAndAnimal);

const orderedByEldest = pets.sort((a,b) => (a.age < b.age) ? 1 : -1);
console.table(orderedByEldest);

const totalYears = pets.reduce((total, pet) => {
    return total + pet.age;
}, 0);
console.log(totalYears);

const alpha = philosophers.sort((lastOne, nextOne) => {
    const aSplit = lastOne.split(' ');
    const aLast = aSplit[aSplit.length - 1];

    const bSplit = nextOne.split(' ');
    const bLast = bSplit[bSplit.length - 1];

    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

const numberPerSpecies = pets.reduce((obj, pet) => {
    if(!obj[pet.animal]) {
        obj[pet.animal] = 0;
    }
    obj[pet.animal]++;
    return obj;
}, {});
console.log(numberPerSpecies);