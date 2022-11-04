// Iteration 1: Names and Input
const hacker1 = 'Gerard';
const hacker2 = 'Cris';
const nameProgrammers = function (driver, navigator) {
    console.log(`The driver's name is ${driver}`);
    console.log(`The navigator's name is ${navigator}`);
}

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let capitalizedName = '';
for (const letter of hacker1) {
    capitalizedName += `${letter.toUpperCase()} `;
}
console.log(capitalizedName);

let nameReverse = '';
for (let letterIdx = hacker2.length-1; letterIdx >= 0; letterIdx--) {
    nameReverse += hacker2[letterIdx];
}
console.log(nameReverse);


