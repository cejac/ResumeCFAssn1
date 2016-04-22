(function() {var userName = prompt("Hi! What's your name?");
console.log("User input for userName: " + userName);
alert("Hi " + userName + "! Here's a page about me!");

var counter = 0

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
    els[i].className = "right"
    els[i].innerHTML += '<img src="http://images.all-free-download.com/images/graphiclarge/thumbs_up_star_312288.jpg")/>';
  } else {
    els[i].textContent = wrongAnswer;
    els[i].className = "wrong"
  }
} else if (response === 5) {
  if (parseInt(userInput) === response) {
    els[i].textContent = ("That is correct " + userName + "!");
    els[i].className = "right";
    els[i].innerHTML += '<img src="http://images.all-free-download.com/images/graphiclarge/thumbs_up_star_312288.jpg")/>';
    counter++;
  } else if (userInput > 5) {
    els[i].textContent = ("I'm not that crazy!");
    els[i].className = "wrong";
  } else {
    els[i].textContent = ("That's too few!");
    eli[i].className = "wrong";
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
