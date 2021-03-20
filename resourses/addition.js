export const testCases = [
  {
    description: "Should be able to add two positive integers numbers",
    operation: "+", // 1500 + 2000 = 3500
    number1: "1500",
    number2: "2000",
    expectedResult: "3500",
  },
  {
    description:
      "Should be able to add a negative integer to a positive floating point number",
    operation: "+", // // -1 + 1.0000 = 0
    number1: "-1",
    number2: "1.0000",
    expectedResult: "0",
  },
  {
    description: "Should be able to add a floating point number to an integer",
    operation: "+", // 10.1 + 2 = 12.1
    number1: "10.1",
    number2: "2",
    expectedResult: "12.1",
  },
  {
    description: "Should be able to add an integer to a floating point number",
    operation: "+", // 10 + 9.9999 = 19.9999
    number1: "10",
    number2: "9.9999",
    expectedResult: "19.9999",
  },
  {
    description: "Should be able to add two floating point numbers",
    operation: "+", // 34.999 + 1.0 = 35.999
    number1: "34.999",
    number2: "1.0",
    expectedResult: "35.999",
  },
  {
    description: "Should be able to add a negative integer and zero",
    operation: "+", // -5 + 0 = -5
    number1: "-5",
    number2: "0",
    expectedResult: "-5",
  },
  {
    description: "Should be able to add zero and a positive integer",
    operation: "+", // 0 + 5 = 5
    number1: "0",
    number2: "5",
    expectedResult: "5",
  },
  {
    description:
      "Should be able to add a negative integer with a positive number",
    operation: "+", // -5 + 5 = 0
    number1: "-5",
    number2: "5",
    expectedResult: "0",
  },
  {
    description: "Should be able to add two large positive integers",
    operation: "+", // 300000000 + 900000000 = 1200000000
    number1: "300000000",
    number2: "900000000",
    expectedResult: "1200000000",
  },
  {
    description:
      "Should be able to add a negative floating point and a positive integer",
    operation: "+", // -1987.50 + 1987 = -0.5
    number1: "-1987.50",
    number2: "1987",
    expectedResult: "-0.5",
  }, // test cases from subtraction
  {
    description:
      "An addition of a negative floating point addend, to an integer addend should be treated as a subtraction of a positive integer subtrahend",
    operation: "+", // 1000 + -10.99 = 989.01
    number1: "1000",
    number2: "-10.99",
    expectedResult: "989.01",
  },
  {
    description:
      "An addition of a negative floating point addend should be treated as a subtraction of a positive floating point subtrahend",
    operation: "+", // -1.0 + -989.99
    number1: "-1.0",
    number2: "-989.99",
    expectedResult: "-990.99",
  },
  {
    description:
      "An addition of a negative integer addend should be treated as a subtraction of a poisitive integer subtrahend",
    operation: "+", // // 50 + - 60 = -10
    number1: "50",
    number2: "-60",
    expectedResult: "-10",
  },
  {
    description:
      "An addition of a negative integer addend to another negative integer addend should be treated as a subtraction of a poisitive integer subtrahend",
    operation: "+", // // -5 + - 20 = -25
    number1: "-5",
    number2: "-20",
    expectedResult: "-25",
  },
];
