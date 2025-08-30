// Conditionals and Variables
let userName = "Boscoh";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Custom functions

// Function 1: Greet user
function greet(name) {
  return "Hello, " + name + "!" + " Welcome to JavaScript.";
}

// Function 2: Double a number
function doubleNumber(num) {
  return num * 2;
}

console.log(greet(userName));
console.log("Double of 10 is:", doubleNumber(10));

// Loops

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// DOM Interactions

// 1. Change text content when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Thanks for clicking the button!";
});

// 2. Change title color
document.getElementById("title").style.color = "red";

// 3. Add new items to the list when button is clicked
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "Item " + (document.getElementById("myList").children.length + 1);
  document.getElementById("myList").appendChild(newItem);
});
