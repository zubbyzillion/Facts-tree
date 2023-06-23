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
    else return ("This is a Negative Year!");

    // return currentAge;
}

console.log(calcYear(2035));

// If Else

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

alert(message);