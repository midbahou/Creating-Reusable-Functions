// =============== ALAB 308.5.1: Creating Reusable Functions =========================

// This is the one I like to work with
// function reverseStr(str) {
//     let revStr = "";
//     for(i = str.length-1; i >= 0; i--){
//         revStr += str[i]
//     }
//     return revStr;
// }
// console.log(reverseStr("!dloW olleH"));


// Part 1: Thinking Functionally

//*Take an array of numbers and return the sum.
//* Take an array of numbers and return the average.
const myArr = [24, 56, 5, 23, 9]; // declaration of an array

function sumArray(sumArr){
    let sum = 0; // initialization of sum
    let avr = 0; // initialization of avr
    for (let i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
        if (i == sumArr.length-1) {
            avr = (sum / sumArr.length);
        }
    } 
    // return sum; // the answer will be 117
    return avr; // the average will be 23.4
}

console.log(sumArray(myArr));


//* Take an array of strings and return the longest string.

const strArray = ["football", "tenis", "Soccer", "Vollybal"];
const strArray2 = ["Green", "Blue" , "red"];
function longestString(strg){
    let longest = "";
    for (i = 0; i < strg.length; i++){
        if (strg[i].length > longest.length) {
            longest = strg[i]
           console.log(longest);
        }
    }
}

longestString(strArray);
longestString(strArray2);


//* Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
    // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(strg, number){
    const results = [];
    for(let i = 0; i < strg.length; i++){
        if (strg[i].length > number) {
            results.push(strg[i])
        }
    }
    return results;
}

console.log(stringsLongerThan(strArray, 6));



//* Take a number, n, and print every number between 1 and n with using loops.

function printUntilln(number) {
    let current = 1;
    
    while(current !== number){
    if (current < number){
        current++;
    } else if (current > number) {
        current--;
    } else {
        console.log("Please insert numerique number: ");
        break
    }
    if (current !== number) {
        console.log(current);
    }
}
    
}

printUntilln(-9);



// ========================= Part 2: Thinking Methodically ===============================

//* 1) Sort the array by age.
const cvsArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
    
    cvsArray.sort((a, b) => Number(a.age) - Number(b.age)); // the built-in function (Number) converts the age property (which is a string) into a number for proper numerical comparison.
    console.log("This array is Sort the array by age: ", cvsArray);
    
    
//* 2) Filter the array to remove entries with an age greater than 50.
const ageLessThan50 = cvsArray.filter(person => Number(person.age) <= 50);
console.log("This array contain people with an age of 50 y.o or yonger: ", ageLessThan50);
    
    
    
//* 3) Map the array to change the “occupation” key to “job” and increment every age by 1.
const changeOccupKey = cvsArray.map(change => ({
        ...cvsArray,
        job: change.occupation,
        age: Number(change.age) + 1
}));
console.log(changeOccupKey);
    
    
//* 4) Use the reduce method to calculate the sum of the ages.
//* 5} Then use the result to calculate the average age.
    
const sumAges = cvsArray.reduce((acc, num) => acc + Number(num.age), 0);
let avrAges = sumAges / (cvsArray.length)
    
console.log("This is the Total Age:", sumAges);
console.log("This is the Average Ages: ", avrAges);
    
    



    // ========================= Part 3: Thinking Critically ===============================
//* Take an object and increment its age field.
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

function incrementAge(persAge){
    persAge.forEach(person => {
        if (!(person.age)) {
            person.age = 0;  // Initialize age if it doesn't exist
        } else {
        person.age = String(Number(person.age) + 1); // Convert age to a number, increment it, then convert it back to string and update the object
        } 
        person.updated_at = new Date(); // Add or update the updated_at property
    });
    return persAge

// this is another way to do it but just over a specific object inside the array.
    // if (!(persAge[0].age)) {
    //     persAge[0].age = 0;  // Initialize age if it doesn't exist
    // } else {
    // persAge[0].age = String(Number(persAge[0].age) + 1); // Convert age to a number, increment it, then convert it back to string and update the object
    // persAge[0].updated_at = new Date(); // Add or update the updated_at property
// }
}
incrementAge(cvsArray)
console.log(cvsArray);



//* Take an object, make a copy, and increment the age field of the copy. Return the copy.
function incrementAgeCopy(originalCVSArray) {
    const cvsArrayCopy = [...originalCVSArray];

    cvsArrayCopy.forEach(personCopy => {
        if (!personCopy.age) {
            personCopy.age = 0; // Initialize age if it doesn't exist
        } else {
            personCopy = String(Number(personCopy.age) + 1);
        }
        personCopy.updated_at = new Date(); // Add or update the updated_at property
    }) 
    return cvsArrayCopy;
}
incrementAgeCopy(cvsArray);
console.log(cvsArray);
