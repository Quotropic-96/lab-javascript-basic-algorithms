// Iteration 1: Names and Input
const hacker1 = 'Aaag';
const hacker2 = 'Aaagc';
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
function capitalizeName (nameStr) {
    let capitalizedName = '';
    for (const letter of nameStr) {
        capitalizedName += `${letter.toUpperCase()} `;
    }
    return capitalizedName;
}
console.log(capitalizeName(hacker1));

function reverseName (nameStr) {
     let reversedName = '';
    for (let letterIdx = nameStr.length-1; letterIdx >= 0; letterIdx--) {
        reversedName += nameStr[letterIdx];
    }
    return reversedName;
}
console.log(reverseName(hacker2));

function computeLengthOfShortestName (driver, navigator) {
    if (driver.length > navigator.length) {
        return navigator.length;
    } else {
        return driver.length;
    }
}
function computeFirstProgrammer (driver, navigator) {
    const shortestName = computeLengthOfShortestName(driver, navigator); 
    for (let i = 0; i < shortestName; i++) {
        if (driver[i] == navigator[i]) {
            continue;
        }
        if (driver[i] > navigator[i]) {
            return navigator;
        }
        if (driver[i] < navigator[i]) {
            return driver;
        }
    }
    if (driver.length === navigator.length) {
        return 'equal';
    }
    if (driver.length < navigator.length) {
        return driver;
    }
    if (driver.length > navigator.length) {
        return navigator;
    }
}
function outputResult (driver, navigator) {
    const firstProgrammer = computeFirstProgrammer(driver, navigator);
    switch (firstProgrammer) {
        case driver:
           console.log("The driver's name goes first.");
           break;
        case navigator:
            console.log("Yo, the navigator goes first definitely.");
            break;
        case 'equal':
            console.log("What?! You both have the same name?");
            break;
        default:
            console.log('Ups... Something went wrong');
    }
}
outputResult(hacker1, hacker2);
