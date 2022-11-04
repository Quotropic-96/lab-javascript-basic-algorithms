
// Iteration 1: Names and Input
console.log('Iteration 1:');
const hacker1 = 'Gerard';
const hacker2 = 'Pair';
const nameProgrammers = function (driver, navigator) {
    console.log(`The driver's name is ${driver}`);
    console.log(`The navigator's name is ${navigator}`);
}
nameProgrammers(hacker1, hacker2);

// Iteration 2: Conditionals
console.log('Iteration 2:');
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
console.log('Iteration 3:');
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

/* Bonus 1 */
console.log('Bonus 1:');
const lorem3Par = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet euismod ipsum. Etiam sagittis ex sem, a eleifend neque pharetra ut. Donec a condimentum lorem, vitae pulvinar tellus. Praesent sit amet aliquet turpis. Ut iaculis fringilla ipsum, ac pretium orci. Aliquam vitae massa ut mauris hendrerit porttitor et id felis. Morbi non bibendum erat, a maximus lorem. Nunc arcu libero, auctor sed consequat sed, maximus at risus. Phasellus lectus odio, luctus at tristique eu, tincidunt nec ex. Vivamus vulputate lacus vel massa imperdiet dapibus. Vivamus ullamcorper tellus turpis, eu ultricies eros vestibulum vitae. Fusce mollis volutpat sem, ut posuere magna imperdiet pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a ante auctor, faucibus ligula a, pulvinar lorem. Vivamus dapibus dignissim placerat. Vestibulum laoreet dolor ut leo maximus, quis commodo lorem viverra. In eu leo id turpis viverra dignissim. Curabitur non eleifend turpis, id feugiat augue. Suspendisse sodales convallis turpis ut rhoncus. Cras in dapibus neque. Aenean ac dapibus dui. Nulla nec placerat nunc, vitae volutpat ipsum. Quisque elit nunc, rutrum sit amet porttitor sed, vulputate vitae ipsum. Ut auctor augue nec nisi venenatis, vitae lacinia neque ultrices.';
const numberOfWords = function (str) {
    return str.split(' ').length;
}
const numberOfCharacters = (character, str) => {
    return str.split(character).length - 1;
}
console.log(numberOfWords(lorem3Par));
console.log(numberOfCharacters('et', lorem3Par));

/* Bonus 2 */
console.log('Bonus 2:');
const phraseToCheck = `A man, a plan, a canal, Panama!`;
function cleanString (fullString) {
    let cleanedString = '';
    for (letter of fullString) {
        if (letter != ' ' && letter != '"' && letter != "'" && letter != '!' && letter != '?' && letter != ',' && letter != '.') {
            cleanedString += letter.toLowerCase();
        }
    }
    return cleanedString;
}
function isPalindrome (string) {
    string = cleanString(string);
    for (let i = 0; i <= Math.ceil(string.length/2); i++) {
        if (string[i] != string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(phraseToCheck));
