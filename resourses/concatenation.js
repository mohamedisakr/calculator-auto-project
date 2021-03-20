export const testCases = [
  {
    description: "Should be able to concatenate two positive integers numbers",
    operation: "", // 1500 + 2000 = 15002000
    number1: "1500",
    number2: "2000",
    expectedResult: "15002000",
  },
  {
    description:
      "Should be able to concatenate a negative integer to a positive floating point number",
    operation: "", // // -1 + 1.0000 = -11.0000
    number1: "-1",
    number2: "1.0000",
    expectedResult: "-11.0000",
  },
  {
    description:
      "Should be able to concatenate a floating point number to an integer",
    operation: "", // 10.1 + 2 = 10.12
    number1: "10.1",
    number2: "2",
    expectedResult: "10.12",
  },
  {
    description:
      "Should be able to concatenate an integer to a floating point number",
    operation: "", // 10 + 9.9999 = 109.9999
    number1: "10",
    number2: "9.9999",
    expectedResult: "109.9999",
  },
  {
    description: "Should be able to concatenate two floating point numbers",
    operation: "", // 34.999 + 1.0 = 34.9991.0
    number1: "34.999",
    number2: "1.0",
    expectedResult: "34.9991.0",
  },
  {
    description: "Should be able to concatenate a negative integer and zero",
    operation: "", // -5 + 0 = -50
    number1: "-5",
    number2: "0",
    expectedResult: "-50",
  },
  {
    description: "Should be able to concatenate zero and a positive integer",
    operation: "", // 0 + 5 = 05
    number1: "0",
    number2: "5",
    expectedResult: "05",
  },
  {
    description:
      "Should be able to concatenate a negative integer with a positive number",
    operation: "", // -5 + 5 = -55
    number1: "-5",
    number2: "5",
    expectedResult: "-55",
  },
  {
    description: "Should be able to concatenate two large positive integers",
    operation: "", // 300000000 + 900000000 = 300000000900000000
    number1: "300000000",
    number2: "900000000",
    expectedResult: "300000000900000000",
  },
  {
    description:
      "Should be able to concatenate a negative floating point and a positive integer",
    operation: "", // -1987.50 + 1987 = -1987.501987
    number1: "-1987.50",
    number2: "1987",
    expectedResult: "-1987.501987",
  },
];
