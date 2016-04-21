(function() {var userName = prompt("Hi! What's your name?");
console.log("User input for userName: " + userName);
alert("Hi " + userName + "! Here's a page about me!");

var counter = 0

// var pElOne = document.getElementById('respOne');
// var pElTwo = document.getElementById('respTwo');
// var pElThree = document.getElementById('respThree');
// var pElFour = document.getElementById('respFour');
// var pElFive = document.getElementById('respFive');
// var pElSix = document.getElementById('respSix');

var els = [
  document.getElementById('respOne'),
  document.getElementById('respTwo'),
  document.getElementById('respThree'),
  document.getElementById('respFour'),
  document.getElementById('respFive'),
  document.getElementById('respSix'),
  document.getElementById('corrAns')
];

var question = [
  "Want to play a guessing game?",
  "Am I a male?",
  "Do I enjoy baking?",
  "Do I have brown eyes?",
  "How many cats do I have?",
  "If you guess the number I'm thinking of between 1 and 5, you'll be done!"
];

var response = [
  "yes",
  "no",
  "yes",
  "yes",
  5
]

var answer = [
  "Great," + userName + "! Lets see what you know about me so far!",
  "That's right " + userName + "!",
  "Correct, " + userName + "! I'll bake you something!",
  "You know me so well " + userName + "! A little too well...",
];

var wrongAnswer = [
  "Too bad, " + userName + "! You will learn about me!",
  "Sorry, " + userName + "! I am female, not male",
  "That's incorrect, " + userName + "!",
  "Wrong, " + userName + ". You don't know me at all! But lets get to know each other!",
];

function game(question, response, answer, wrongAnswer) {
  var userInput = (prompt(question).toLowerCase());
  if (isNaN(parseInt(userInput))) {
    console.log(userInput);
    if (userInput === response) {
    counter++;
    els[i].textContent = answer;
  } else {
    els[i].textContent = wrongAnswer;
  }
} else if (response === 5) {
  if (parseInt(userInput) === response) {
    els[i].textContent = ("That is correct " + userName + "!");
    counter++;
  } else if (userInput > 5) {
    els[i].textContent = ("I'm not that crazy!");
  } else {
    els[i].textContent = ("That's inccorect");
  }
} else {
  while (parseInt(userInput) !==3) {
    console.log(userInput);
    userInput = parseInt(prompt("Guess again!"));
  }
}
}

for (i = 0; i < question.length; i++) {
  game(question[i], response[i], answer[i], wrongAnswer[i], els[i])
}

els[5].textContent = ("You got " + counter + " out of 5 answers correct!");
})();






// var guess = prompt("Want to play a guessing game?").toUpperCase();
// console.log("User input for guess: " + guess);
// if (guess === "NO" || guess === "N") {
//   alert("Too bad, " + userName + "! You will learn about me!");
// } else {
//   alert("Great," + userName + "! Lets see what you know about me so far!");
// }
//
// var gender = prompt("Am I a male?").toUpperCase();
// var counter = 0;
// console.log("User input for gender: " + gender);
// if (gender === "YES" || gender === "Y") {
//   alert("Sorry, " + userName + "! I am female, not male");
// } else {
//   alert("That's right " + userName + "!");
//   counter++
// }
//
// var baking = prompt("Do I enjoy baking?").toUpperCase();
// console.log("User input for baking: " + baking);
// if (baking === "YES" || baking === "Y") {
//   alert("Correct, " + userName + "! I'll bake you something!");
//   counter++;
// } else {
//   alert("That's incorrect, " + userName + "!");
// }
//
// var eyeColor = prompt("Do I have brown eyes?").toUpperCase();
// console.log("User input for eyeColor: " + eyeColor);
// if (eyeColor === "YES" || eyeColor === "Y") {
//   alert("You know me so well " + userName + "! A little too well...");
//   counter++;
// } else {
//   alert("Wrong, " + userName + ". You don't know me at all! But lets get to know each other!");
// }
//
// var catsOwned = parseInt(prompt("How many cats do I have?"));
// console.log("User input for catsOwned: " + catsOwned);
// if (catsOwned === 5) {
//   alert("You guessed right, " + userName + "!");
//   counter++;
// } else if (catsOwned < 5) {
//   alert("If I had that few, I wouldn't be a true cat lady!");
// } else {
//   alert("I'm not THAT crazy of a cat lady!");
// }
//
// alert("You got " + counter + " out of 4 answers correct!");
//
// var num = parseInt(prompt("If you guess the number I'm thinking of between 1 and 5, you'll be done!"));
// while (num !== 3) {
//   num = parseInt(prompt("Guess my number again."));
// }
