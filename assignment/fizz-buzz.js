/*
Write a solution in the most concise way possible in a programming language of your choice. 
Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. 
*/
for (let number = 1; number < 101; number++) {
  if (number % 15 === 0) {
    console.log("FizzBuzz");
  } else if (number % 5 === 0) {
    console.log("Fizz");
  } else if (number % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
