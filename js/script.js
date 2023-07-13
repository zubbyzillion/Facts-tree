const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Creating DOM elements:Render facts in list
factsList.innerHTML = "";

// factsList.insertAdjacentHTML("afterbegin", "<li>Zubby</li>");

const htmlArr = initialFacts.map(
  (fact) => `<li class="fact">${fact.text}</li>`);

console.log(htmlArr);
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin", html);

// Toggle form visibility
btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a Fact";
    }
});

/*
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

/*
const fact = ["Lisbon is the  capital of Portugal", 2015, true];
// console.log(fact);
console.log(2);
console.log(fact.length);

// const [text, createdIn, isCorrect] = fact;
// console.log(text); //Destructuring.

const newFact = [...fact, " society"]; // Spreading
console.log(newFact);

// Objects
const factObj = {
    text: "Lisbon is the capital of Portugal",
    category: "society",
    createdIn:2015,
    isCorrect: true,
    createSummary: function () {
        return `The fact "${this.text}" is from the category ${this.category.toUpperCase()}`;
    }
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj; // Destructuring by creating variables.
console.log(category);
console.log(factObj.createSummary()); // Calling Methods with functions in it.

// Looping Over an Array(forEach and map method)

// [2, 4, 6, 8].forEach(function(el) {
//     console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function(el) {
//     return el * 10;
// });

/*
const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const allCategories = CATEGORIES.map((el) => el.name);
  console.log(allCategories);

  const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

  function calcYear(year) {
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - year;

    if (currentAge >= 0) return currentAge;
    else return (`This is a Negative Year. Year needs to be equal or less than ${currentYear}.`);

    // return currentAge;
}

  const factAges = initialFacts.map((el) => calcYear(el.createdIn));
  console.log(factAges);
  console.log(factAges.join(" & "));
  */