export const testCases = [
  {
    description: "Should be able to divide two positive integers",
    operation: "/",
    number1: "1500",
    number2: "2000",
    expectedResult: "0.75",
  },
  {
    description: "Should be able to divide 0 by a integer divisor",
    operation: "/",
    number1: "0",
    number2: "2000",
    expectedResult: "0",
  },
  {
    description:
      "Should be able to divide a negative dividend by a positive divisor",
    operation: "/",
    number1: "-1500",
    number2: "2000",
    expectedResult: "-0.75",
  },
  {
    description:
      "Should be able to divide a negative floating point dividend by a positive divisor",
    operation: "/", // -3.123 / 5 = -0.6246
    number1: "-3.123",
    number2: "5",
    expectedResult: "-0.6246",
  },
  {
    description:
      "Should be able to divide a negative integer dividend by a positive floating point divisor to nine significiant figures",
    operation: "/", // -5 / 3.123 = -1.601024655779699
    number1: "-5",
    number2: "3.123",
    expectedResult: "-1.601024655779699",
  },
  {
    description:
      "Should be able to divide an floating point dividend by an integer divisor",
    operation: "/", // 4.21 / 3 = 1.40333333
    number1: "4.21",
    number2: "3",
    expectedResult: "1.40333333",
  },
  {
    description:
      "Should be able to divide an integer dividend by a floating point divisor",
    operation: "/", // 10 / 3.123 = 3.202049311559398
    number1: "10",
    number2: "3.123",
    expectedResult: "3.202049311559398",
  },
  {
    description: "Should be able to divide two floating point numbers",
    operation: "/", // 0.234 / 3.123 = 0.0749279539
    number1: "0.234",
    number2: "3.123",
    expectedResult: "0.0749279539",
  },
  {
    description:
      "Should be able to divide two many digit floating point numbers",
    operation: "/", // 1.23456789 / 2.10987654 = 0.5851375028796708
    number1: "1.23456789",
    number2: "2.10987654",
    expectedResult: "0.5851375028796708",
  },
];

export const divisionByZero = {
  description: "Should report error for division by zero",
  operation: "/", // 1500 / 0 = Error
  number1: "1500",
  number2: "0",
  expectedResult: "",
};
