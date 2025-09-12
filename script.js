//  Accessing the Elements of the Html by the id 
const introOut = document.getElementById("introOut");
const varOut = document.getElementById("varOut");
const typeOut = document.getElementById("typeOut");
const opOut = document.getElementById("opOut");
const controlOut = document.getElementById("controlOut");
const funcOut = document.getElementById("funcOut");
const arrOut = document.getElementById("arrOut");
const strOut = document.getElementById("strOut");
const objOut = document.getElementById("objOut");
const errOut = document.getElementById("errOut");

//  Use in the Object Manipulation 

let student = { name: "John", age: 20 };

// Function Return the Type 
function givesType(userInput) {
    let result = "";
    // Check data type
    if (userInput === null) {
        result = "null";  // If user clicks cancel
    } else if (userInput.trim() === "") {
        result = "empty string";
    } else if (!isNaN(userInput)) {
        result = "number";
    } else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
        result = "boolean";
    } else {
        result = "string";
    }
    return result;
}


// 1. Intro

function logIntro() {
    introOut.innerText = "JavaScript Loaded!";
}


// 2. Variables

function showTypes() {
    // Take input from user
    let userInput = prompt("Enter something , this gives the type:", "true");
    varOut.innerText = `Type : ${givesType(userInput)}`;
}


// 3. Dynamic Typing

function conversion(arg){
    // Take the Input from the User
    let firstNumber = prompt("Enter the First Number ",12);
    let secondNumber = prompt("Enter the Second Number ",10);
    let result = "";

    if (arg === 'implicit') {
        result = firstNumber + secondNumber;
    } else {
        result = Number(firstNumber) + Number(secondNumber);
    }
    typeOut.innerText = `${firstNumber} + ${secondNumber} = ${result}`;
}


// 4. Operators

function performOperations() {
    // Take input from user
    let firstNumber = prompt("Enter the First Number ",2);
    let secondNumber = prompt("Enter the Second Number ",4);
    let operator = prompt("Enter the Operator ","*");

    let result = eval(`${firstNumber} ${operator}  ${secondNumber}`);
    opOut.innerText = `${firstNumber} ${operator}  ${secondNumber} = ${result}`;
}

function ageEligibility() {
    // Take input from user
    let age = prompt("Enter the Age (Vote)",23);
    let result = "";

    if (age === null) {
        result = "Please enter the age";
    } else if (age >= 18 && age <= 60) {
        result = "Eligible to vote";
    } else {
        result = "Not eligible to vote";
    }

    opOut.innerText = `${age} , ${result}`;
}

// 5. Control Structures
function checkNumber() {
    let num = prompt("Enter the Number (Positive, Negative, Zero)",-12);
    let result = "";

    if (num === null) {
        result = "Please enter the Number";
    } else {
        result = num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero");
    }

    controlOut.innerText = `${num} , ${result}`;
}
function loopUpTo() {
    let num = prompt("Enter the Number ",10);
    let result = "";

    if (num === null) {
        result = "Please enter the Number";
    } else {
        for (let i = 1; i <= num; i++) result += i + " ";
    }

    controlOut.innerText = result;
}

function weekNumber() {
    let num = prompt("Enter the week number ",5);
    let result = "";

    if (num === null) {
        result = "Please enter the Number";
    } else {
        switch (Number(num)) {
            case 1:
                result = "Monday";
                break;
            case 2:
                result = "Tuesday";
                break;
            case 3:
                result = "Wednesday";
                break;
            case 4:
                result = "Thursday";
                break;
            case 5:
                result = "Friday";
                break;
            case 6:
                result = "Saturday";
                break;
            case 7:
                result = "Sunday";
                break;
            default:
                result = "Invalid day";
        }
    }

    controlOut.innerText = `${num} , ${result}`;
}

// 6. Functions

// Closure for the Number of times button Clicked 

function outer() { let count = 0; return () => ++count; }
let counter = outer();

function closureDemo() {
    funcOut.innerText = counter() + " Times Button Clicked ";
}


// 7. Arrays

function arrayMethod(method) {
    let userInput = prompt("Enter values separated by commas ", "1,2,3,4,5,6,7");

    // Convert input string into an array
    let userArray = userInput.split(",").map(num => Number(num.trim()));
    let result = "";

    if (method === 'map') {
        result = userArray.map(n => n * 2);
    } else if (method === 'filter') {
        result = userArray.filter(n => n % 2 === 0);
    } else if (method === 'reduce') {
        result = userArray.reduce((a, c) => a + c, 0);
    }

    arrOut.innerText = Array.isArray(result) ? result.join(",") : result;
}


// 8. Strings

function wordReplace(arg) {
    let sentence = prompt("Enter the Sentence ", "I love JavaScript because JavaScript is powerful.");
    let replaceWord = prompt("Enter Replaced Word", "JavaScript");
    let replacedWord = prompt("Enter the new word ", "Python");
    let result = ""
    if (arg === 'single') {
        result = sentence.replace(replaceWord, replacedWord);
    } else if (arg === 'all') {
        result = sentence.replaceAll(replaceWord, replacedWord);
    }

    strOut.innerText = `Original: ${sentence} \n Updated : ${result}`;
}

function greeting() {
    let name = prompt("Enter the Name ", "Sir");
    let result = "";
    if (name) {
        result = `Hello, ${name}! Welcome to JavaScript.`;
    } else {
        result = "Hello, Guest! ";
    }
    strOut.innerText = result;
}


// 9. Objects



function objectDisplay() {
    objOut.innerText = JSON.stringify(student);
}

function objectAddProperty() {
    let property = prompt("Enter the Property ");
    let result = "";
    if (property && !(student.hasOwnProperty(property))) {
        let value = prompt(`Enter the Value of ${property}`);
        student[property] = value;
        result = JSON.stringify(student);
    } else if (student.hasOwnProperty(property)) {
        result = `${property} Exist with Value ${student[property]}`;
    } else {
        result = "Enter the Property";
    }
    objOut.innerText = result;
}

function deleteProperty() {
    let property = prompt("Enter the Property ");
    let result = "";
    if (property && (student.hasOwnProperty(property))) {
        result = `Delete ${property} with value ${student[property]}`;
        delete student[property];
    } else if (!(student.hasOwnProperty(property))) {
        result = `${property} Not Exist`;
    } else {
        result = "Enter the Property";
    }
    objOut.innerText = result;
}

function updateProperty() {
    let property = prompt("Enter the Property ");
    let result = "";
    if (property && (student.hasOwnProperty(property))) {
        let value = prompt(`Enter the Updated Value of ${property}`);
        result = `Update ${property} with value ${student[property]} to ${value}`;
        student[property] = value;
    } else if (!(student.hasOwnProperty(property))) {
        result = `${property} Not Exist`;
    } else {
        result = "Enter the Property";
    }
    objOut.innerText = result;
}

// 10. Error Handling
class NotANumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotANumberError";
    }
}
function numberError(inputNumber) {
    if (!(givesType(inputNumber) === 'number')) {
        throw new NotANumberError("Please Give the Number");
    } else {
        return `Thank You! for giving ${inputNumber}`;
    }
}

function errorDemo() {
    let num = prompt("Enter the Value ","web");
    let result = "";
    try {
        result = numberError(num);
    } catch (err) {
        result = `${num} , ${err.name} : ${err.message}`;
    } finally {
        errOut.innerText = result;
    }
}