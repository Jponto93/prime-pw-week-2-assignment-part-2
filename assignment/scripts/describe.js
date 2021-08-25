// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable name as assign it the string "Dane"
// We create an if statement to check if the variable is the same as Mary. If it is, we will log "Hi, Mary!"
// It is not, so the else statement executes instead
// we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable 'secret' initialied to nothing and another variable 'code' initialized to 123.
// We create an if statement to check if code is equal to 123. It is. so we execute the code block.
// The code block assigns variable secret the string 'super' and also multiplyes the value of code by 2. Code is now 246.
// We create another if statement that checks if code is > 250. It is not, so the code block does not execute.
// We console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare three variables, isStudent initialied to boolean true, age initialied to 34, and zip initialied to 55407.
// We create an if statement checking if both isStudent is true and zip > 80,000. Zip is not > 80,000 so code does not execute.
// We move on to first else if statement, checking if isStudent false OR if age is < 30. Neither is true so code does not execute.
// We move on to the 2nd else if statement, checking if isStudent equal to true. It is, so we console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red'; // FIX colorOne should be set to blue.
let colorTwo = 'blue'; // FIX colorTwo should be set to red.
let mix = true;

if (mix === true) {
  colorOne = 'purple'; // FIX colorTwo = 'purple'; should be in the code block as well.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4; // FIX Should be let time = 4; 

if (temp > 39 || time >= 4) { // FIX (Temp > 39 && time >= 4)
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) { // FIX if (age >= minAge) { console.log('enter');}
  console.log('no entry');
} else { // FIX else { console.log('no entry');}
  console.log('enter');
}
*/
