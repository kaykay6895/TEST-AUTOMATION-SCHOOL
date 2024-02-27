//Calculate the sum of numbers within an array
// create an array

const numArray = [8, 9, 13, 15, 20, 22, 40, 45, 50, 55 ]

let sum = 0;

for (let i = 0; i < numArray.length; i++ ) {
  sum += numArray[i];
}

console.log(sum)