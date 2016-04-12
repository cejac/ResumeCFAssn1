var userName = prompt("Hi! What's your name?");
console.log("User input for userName: " + userName);
alert("Hello, " + userName + "! Here's a page I made about me");

var guess = prompt("Want to play a guessing game?");
console.log("User input for guess: " + guess);
if (guess.toUpperCase() === "NO" || guess.toUpperCase() === "N") {
  alert("Too bad, " + userName + "! You will learn about me!");
} else {
  alert("Great," + userName + "! Lets see what you know about me so far!");
}

var gender = prompt("Am I a male?");
var counter = 0;
console.log("User input for gender: " + gender);
if (gender.toUpperCase() === "YES" || gender.toUpperCase() === "Y") {
  alert("Sorry, " + userName + "! I am female, not male");
} else {
  alert("That's right " + userName + "!");
  counter++
}

var baking = prompt("Do I enjoy baking?");
console.log("User input for baking: " + baking);
if (baking.toUpperCase() === "YES" || baking.toUpperCase() === "Y") {
  alert("Correct, " + userName + "! I'll bake you something!");
  counter++;
} else {
  alert("That's incorrect, " + userName + "!");
}

var eyeColor = prompt("Do I have brown eyes?");
console.log("User input for eyeColor: " + eyeColor);
if (eyeColor.toUpperCase() === "YES" || eyeColor.toUpperCase() === "Y") {
  alert("You know me so well " + userName + "! A little too well...");
  counter++;
} else {
  alert("Wrong, " + userName + ". You don't know me at all! But lets get to know each other!");
}

var catsOwned = parseInt(prompt("How many cats do I have?"));
console.log("User input for catsOwned: " + catsOwned);
if (catsOwned === 5) {
  alert("You guessed right, " + userName + "!");
  counter++;
} else if (catsOwned < 5) {
  alert("If I had that few, I wouldn't be a true cat lady!");
} else {
  alert("I'm not THAT crazy of a cat lady!");
}

alert("You got " + counter + " out of 4 answers correct!");

var num = parseInt(prompt("If you guess the number I'm thinking of between 1 and 5, you'll be done!"));
while (num !== 3) {
  num = parseInt(prompt("Guess my number again."));
}
