/* ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let l1 = 10;
let l2 = 15;
function area(l1, l2) {
  return l1 * l2;
}
console.log("Area of rectangle: " + area(l1, l2));
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

crazySum(2, 4);
function crazySum() {
  let crazySum = 0;
  for (let i = 0; i < arguments.length; i++) {
    crazySum += arguments[i];
  }
  console.log(crazySum);
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(number1, number2) {
  return Math.abs(number1 - number2);
}
console.log(crazyDiff(50, 20));
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

boundary(300);
function boundary(boundary) {
  if ((boundary >= 20 && boundary <= 100) || boundary == 400) {
    console.log("True");
  } else {
    console.log("False");
  }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

strivify("Strive");
function strivify(strivify) {
  if (strivify.startsWith("Strive")) {
    return strivify;
  } else {
    let withoutstrive = "Strive" + strivify;
    console.log(withoutstrive);
  }
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(numberdiv) {
  if (numberdiv % 3 == 0 || numberdiv % 7 == 0) {
    return numberdiv + " is a multiple of 3 or 7";
  } else {
    return "Not a multiple of 3 or 7";
  }
}
console.log(check3and7(24));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirst("everybody"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str) {
  if ((cutString = str)) {
    let data = str.substring(1, str.length - 1);
    return data;
  }
}
console.log(cutString("Cut String"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(number) {
  if ((giveMeRandom = Number)) {
    return Math.floor(Math.random() * 10) + 1;
  }
}
console.log(giveMeRandom(5));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
