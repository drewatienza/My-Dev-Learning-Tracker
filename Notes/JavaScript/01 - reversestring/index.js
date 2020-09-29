// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// METHOD 1
// first - turn 'str' into an array
// call 'reverse' method on the array
// join the array back into a string
// return the result
function reverse(str) {
  return str.split("").reverse().join("");
}

// METHOD 2
// create an empty string called 'reversed'
// for each character in the provided string
//    take the character and add it to the start of 'reversed'
// return the variable 'reversed'
function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// METHOD 3
const reverse = (str) => {
  return str.split("").reduce((rev, char) => char + rev, "");
};

module.exports = reverse;

// DEBUGGER STEPS

// Add a 'debugger' statement in your function
// Call the function manually
// At the terminal, run 'node inspect index.js'
// To continue execution of the file, press 'c' then 'enter'
// To launch the 'repl' session, type 'repl' then 'enter'
// To exit the 'repl', prell 'Control' + 'C'
