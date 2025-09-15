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
const alertBtn = document.getElementById('alertBtn');
const formPrevent = document.getElementById('formPrevent');
const eventDelegation = document.getElementById('eventDelegation');
const asyncOut = document.getElementById('asyncOut');
const es6Out = document.getElementById('es6Out');

// Use in the Document Object Model 

const choices = ["Rock", "Paper", "Scissors"];

const score = JSON.parse(localStorage.getItem("message")) || {
    win_count: 0,
    loss_count: 0,
    total_games: 0,
    win_percent: 0
};

//  Use in the Object Manipulation 

let student = { name: "John", age: 20 };

// Use in API

const URL = "https://dog.ceo/api/breeds/image/random";


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

function conversion(arg) {
    // Take the Input from the User
    let firstNumber = prompt("Enter the First Number ", 12);
    let secondNumber = prompt("Enter the Second Number ", 10);
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
    let firstNumber = prompt("Enter the First Number ", 2);
    let secondNumber = prompt("Enter the Second Number ", 4);
    let operator = prompt("Enter the Operator ", "*");

    let result = eval(`${firstNumber} ${operator}  ${secondNumber}`);
    opOut.innerText = `${firstNumber} ${operator}  ${secondNumber} = ${result}`;
}

function ageEligibility() {
    // Take input from user
    let age = prompt("Enter the Age (Vote)", 23);
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
    let num = prompt("Enter the Number (Positive, Negative, Zero)", -12);
    let result = "";

    if (num === null) {
        result = "Please enter the Number";
    } else {
        result = num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero");
    }

    controlOut.innerText = `${num} , ${result}`;
}
function loopUpTo() {
    let num = prompt("Enter the Number ", 10);
    let result = "";

    if (num === null) {
        result = "Please enter the Number";
    } else {
        for (let i = 1; i <= num; i++) result += i + " ";
    }

    controlOut.innerText = result;
}

function weekNumber() {
    let num = prompt("Enter the week number ", 5);
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
    let num = prompt("Enter the Value ", '12.5');
    let result = "";
    try {
        result = numberError(num);
    } catch (err) {
        result = `${num} , ${err.name} : ${err.message}`;
    } finally {
        errOut.innerText = result;
    }
}


// 11. Document object Model 

//  Events in Javascript

alertBtn.addEventListener('click',(e) => {
    alert(`Type of Event : ${e.type} \n Target : ${e.target}`);
});

function mOver(obj) {
  obj.innerHTML = "Thank You";
  obj.classList.add('bg-danger');
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
  obj.classList.remove('bg-danger');
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Mouse Down ";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Mouse Up";
}

// Form that Prevent Submission
formPrevent.addEventListener('submit',(e) => {
    e.preventDefault();
    alert(`Form Submission prevented, form values: ${new FormData(e.target).get('name')}`);
});


// Event Delegation : which Item is clicked 

eventDelegation.addEventListener('click',(e) => {
    const click_li = e.target.closest('li');
    alert(`${click_li.textContent} is clicked in that Table`)
});

// Game Rock Paper Scissors

// 🎮 Game buttons

document.querySelectorAll("#rock, #paper, #scissors").forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.textContent;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = "";

        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "🎉 You win!";
            score.win_count += 1;
        } else {
            result = "😢 You lose!";
            score.loss_count += 1;
        }

        score.total_games += 1;
        score.win_percent = (score.win_count / score.total_games) * 100;

        localStorage.setItem("message", JSON.stringify(score));

        alert(`👉 You chose: ${userChoice}
        🤖 Computer chose: ${computerChoice}
        📊 ${result}
        Total Games: ${score.total_games}   
        Wins Count: ${score.win_count}
        Losses Count: ${score.loss_count}               
        Win Percentage: ${score.win_percent.toFixed(2)}%`);
    });
});

// 🔄 Reset button

document.getElementById("reset-score").addEventListener("click", () => {
    score.win_count = 0;
    score.loss_count = 0;
    score.total_games = 0;
    score.win_percent = 0;

    localStorage.setItem("message", JSON.stringify(score));

    alert(`✅ Score Reset!
    Wins: ${score.win_count}
    Losses: ${score.loss_count}
    Total Games: ${score.total_games}
    Win Percentage: ${score.win_percent.toFixed(2)}%`);
});


// 12 . Asynchronous Javascript

function messageAfter2 () {
    setTimeout( () => {
        asyncOut.innerText = "Asynchronous Javascript : Giving message after 2 second ";
    },2000)
};

// Create Promise Object and reject and resolve based o the arg

function createPromise (arg) {
    return new Promise( (resolve,reject) => {
        if (arg) {
            setTimeout( () => {
                resolve('success');
            },1000);
        } else {
            reject('fail');
        }
    });
}

function promiseResolve1 () {
    let arg = confirm("Promise Resolve (Ok) and reject (Cancel)");
    createPromise(arg)
    .then( (res) => {
        asyncOut.innerText = `Asynchronous Javascript : Resolve Promise after 1 sec \n Result : ${res} `;
    })
    .catch( (res) => {
        asyncOut.innerText = `Asynchronous Javascript : Reject Promise after 1 sec \n Result : ${res} `;
    })
};


// 13. ES6


// Destruturing the Object 
 
es6Out.innerText = JSON.stringify(student);

function desObject () {
    let {name,age} = student;
    es6Out.innerText = `Name : ${name} \n Age : ${age}`;
}

//  Use Spread to Merge two Arrays 

function mergeArray () {
    let firstInput = prompt("Enter values separated by commas ", "1,2,3,4");
    let secondInput = prompt("Enter values separated by commas ", "5,6,7,8");

     // Convert input string into an array
    let firstArray = firstInput.split(",").map(num => num.trim());
    let secondArray = secondInput.split(",").map(num => num.trim());
    
    let new_array = [...firstArray, ...secondArray];

    console.log(new_array);
    
    es6Out.innerText = ` First Array : ${firstInput} \n Second Array : ${secondInput} \n Merged Array : ${new_array}`;
}


// 14 . API 

// Generate the Random Dog Image 

const getData = async () => {
  const img = document.getElementById("dogImage");
  const loader = document.getElementById("loader");
  const errOut = document.getElementById("errOut");

  try {
    // Reset UI
    loader.classList.remove("d-none");
    img.classList.add("d-none");
    errOut.innerText = "";

    // Fetch
    let response = await fetch(URL);
    let data = await response.json();

    // Show image
    img.src = data.message;
    img.classList.remove("d-none");
  } catch (error) {
    errOut.innerText = "⚠️ Failed to load dog image. Try again!";
  } finally {
    loader.classList.add("d-none");
  }
};

// Weather App 

async function getWeather() {
  let city = document.getElementById("cityInput").value;
  let weatherDiv = document.getElementById("weather");
  let loader = document.getElementById("weatherLoader");

  if (!city) {
    weatherDiv.innerHTML = `<span class="text-danger">⚠️ Please enter a city name</span>`;
    return;
  }

  try {
    loader.classList.remove("d-none");
    weatherDiv.innerHTML = "";

    // Geocoding API
    let geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    let geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      weatherDiv.innerHTML = `<span class="text-danger">❌ City not found</span>`;
      return;
    }

    let { latitude, longitude, name, country } = geoData.results[0];

    // Weather API
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    let data = await res.json();
    let weather = data.current_weather;

    // Weather icons
    const weatherIcons = {
      0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
      45: '🌫️', 48: '🌫️', 51: '🌦️', 53: '🌦️', 55: '🌦️',
      61: '🌧️', 63: '🌧️', 65: '🌧️', 71: '❄️', 73: '❄️', 75: '❄️',
      80: '🌦️', 81: '🌧️', 82: '🌧️', 95: '⛈️', 96: '⛈️', 99: '⛈️'
    };

    let icon = weatherIcons[weather.weathercode] || '';

    weatherDiv.innerHTML = `
      <div class="border rounded p-3 shadow-sm bg-light">
        <h5 class="mb-2">📍 ${name}, ${country}</h5>
        <p class="mb-1">${icon} <strong>${weather.temperature}°C</strong></p>
        <p class="mb-1">🌬️ Wind: ${weather.windspeed} km/h</p>
        <small class="text-muted">🕒 ${weather.time}</small>
      </div>
    `;

  } catch (error) {
    weatherDiv.innerHTML = `<span class="text-danger">⚠️ Error fetching weather</span>`;
  } finally {
    loader.classList.add("d-none");
  }
}