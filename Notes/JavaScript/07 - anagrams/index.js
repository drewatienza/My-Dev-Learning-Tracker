// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
const anagrams = (stringA, stringB) => {
  // Get the character map of both strings
  const charMapA = getCharMap(stringA);
  const charMapB = getCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }  

  return true;
}

// Helper function to get char map for solution 1
const getCharMap = (str) => {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap;
}

// Solution 2
const anagrams = (stringA, stringB) => {
  /*First, we remove any non-alphabet character using regex and convert       
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  return sortString(stringA) === sortString(stringB)
}

// Helper function to sort strings for solution 2
const sortString = str => {
  return str.split('').sort().join('');
}

module.exports = anagrams;
