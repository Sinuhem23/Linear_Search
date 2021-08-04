var prompt = require('prompt-sync')();

// - Create an array of at least 10 values.
array = [12, 32, 4, 9, 5, -1, 100, -5, 23, 5];

// - Take an input from the user to look for in the array
var num = prompt('Enter a number ');

// - Find and display the total number of occurrences of the user input value in the array
// - Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions
found = false;
positions = [];
occ = 0;

for (let i = 0; i < array.length; i++) {
  if (num == array[i]) {
    occ++;

    positions.push(i + 1);
    found = true;
  }
}
console.log(
  'Number is in position ' + positions + ' and has occured ' + occ + ' times.'
);

if (!found) {
  console.log('Number not found');
}
