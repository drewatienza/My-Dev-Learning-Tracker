// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
// Make an empty array 'words'
// Split the input string by spaces to get an array
// For each word in the array
//   Uppercase the first letter of the word
//   Join first letter with rest of the string
//   Push result into 'words' array
// Join 'words' into a string and return it
const capitalize = (str) => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ')
}

// Solution 2
// Create an empty string called 'result' with first character of the input string capitalized
// For each character in the string
//   if the character to the left is a space
//     Capitalize it and add it to 'result'
//   else
//     Add it to 'result'
const capitalize = str => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    (str[i - 1] === ' ') ? result += str[i].toUpperCase() : result += str[i]
  }

  return result;
}


