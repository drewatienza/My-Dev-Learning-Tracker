// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Notes for Solution 1
// From 0 to n (iterate through rows)
//   Create an empty string, 'stair'
//   From 0 to n (iterate through columns)
//     If the current column is equal to or less than the current row
//       Add a '#' to 'stair'
//     Else
//       Add a space to 'stair'
//   Console log 'stair'

// Solution 1
const steps = (n) => {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      column <= row ? stair += '#' : stair += ' ';
    }
    console.log(stair);
  }
}