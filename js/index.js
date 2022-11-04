// Iteration 1: Names and Input
const hacker1 = 'Gerard';
const hacker2 = 'Cris';
const nameProgrammers = function (driver, navigator) {
    console.log(`The driver's name is ${driver}`);
    console.log(`The navigator's name is ${navigator}`);
}
nameProgrammers(hacker1, hacker2);

// Iteration 2: Conditionals
const compareProgrammersNameLength = (driver, navigator) => {
    if (driver.length > navigator.length) {
        console.log(`Driver has the longest name, it has ${driver.length} characters`);
    } else if (navigator.length > driver.length) {
        console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`);
    } else {
        console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
    }
}
compareProgrammersNameLength(hacker1, hacker2);

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


