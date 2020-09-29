// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// METHOD 1
// const palindrome = (str) => {
//   const rev = str.split("").reverse().join("");

//   return rev === str;
// };

// METHOD 2 - not ideal (making the same comparisions twice)
const palindrome = (str) => {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

module.exports = palindrome;
