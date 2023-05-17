// Creating a program that will sum up the elements in an array.
//    1. Declare the array
//    2. Declare a function that with calculate the sum of the elements in an array
//       by iterqting thru the array with an for loop and return sum;
//    3. console.log the sum of the array

let array = [1, 7, 1000000, 2];

function myRiches(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(myRiches(array));
