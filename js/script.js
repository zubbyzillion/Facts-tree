/*
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a Fact";
    }
});

// Functions

function calcYear(year) {
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - year;

    if (currentAge >= 0) return currentAge;
    else return (`This is a Negative Year. Year needs to be equal or less than ${currentYear}.`);

    // return currentAge;
}
*/
// console.log(calcYear(2035));


// If Else
/*
let votesInteresting = 20;
let votesMindBlowing = 5;

if (votesInteresting === votesMindBlowing) {
    alert("This facts is equally interesting and mind blowing");
} else if (votesInteresting > votesMindBlowing) {
    console.log("This InterestingFact!");
}

// Tenary Operator

let votesFalse = 7;
const totalUpVotes = votesInteresting + votesMindBlowing;

const message = totalUpVotes > votesFalse ? "The Fact is True" : "Might be false, check more sources...";

// alert(message);

// Strings

const text = "Lisbon is the capital of Portugal.";
const upperText = text.toUpperCase(); // A Method is a function called unto something(string or variable)
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcYear(2015)} years old. It is probably ${totalUpVotes > votesFalse ? "correct" : "not true"}.`; // Template Literal/string.
console.log(str);
*/
/*
// Arrow Functions

// const calcFactAge2 = (year) =>  2022 - year;
const calcFactAge2 = (year) => year <= new Date().getFullYear() ? new Date().getFullYear() -year :  `This is a Negative Year. Year needs to be equal or less than ${new Date().getFullYear()}.`;
console.log(calcFactAge2(2015));
*/

// Array

const fact = ["Lisbon is the  capital of Portugal", 2015, true];
console.log(fact);
console.log(2);
console.log(fact.length);

const [text, createdIn, isCorrect] = fact;
console.log(text); //Destructuring.

const newFact = [...fact, " society"]; // Spreading
console.log(newFact);

// Objects