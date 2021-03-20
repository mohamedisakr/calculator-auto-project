export const testCases = [
  {
    description: "Should be able to multiply two positive integers",
    operation: "*", // 1500 * 2000 = 3000000
    number1: "1500",
    number2: "2000",
    expectedResult: "3000000",
  },
  {
    description:
      "Should be able to multiply a floating point multiplicand with an integer multipliplier",
    operation: "*", // 1.212 * 8 = 9696
    number1: "1.212",
    number2: "8",
    expectedResult: "9.696",
  },
  {
    description:
      "Should be able to multiply an integer multiplicand with a floating  point multiplier",
    operation: "*", // 3 * 1.212 = 3.636 // 3 * 1.212 = 3.636
    number1: "3",
    number2: "1.212",
    expectedResult: "3.636",
  },
  {
    description: "Should be able to multiply two floating point numbers",
    operation: "*", // 0.133 * 1.212 = 0.161196
    number1: "0.133",
    number2: "1.212",
    expectedResult: "0.161196",
  },
  {
    description: "Should be able to multiply a integer multiplicand with zero",
    operation: "*", // 1500 * 0 = 0
    number1: "1500",
    number2: "0",
    expectedResult: "0",
  },
  {
    description:
      "Should be able to multiply a negative integer multiplicand with a positive intger multiplier",
    operation: "*", // -1500 * 2000 = -3000000
    number1: "-1500",
    number2: "2000",
    expectedResult: "-3000000",
  },
  {
    description:
      "Should be able to multiply a negative floating point multiplicand with a positive integer multiplier",
    operation: "*", // -1.212 * 8 = -9.696
    number1: "-1.212",
    number2: "8",
    expectedResult: "-9.696",
  },
  {
    description:
      "Should be able to multiply a negative integer multiplicand with a positive floating point multiplier",
    operation: "*", // -8 * 1.212 = -9.696
    number1: "-8",
    number2: "1.212",
    expectedResult: "-9.696",
  },
  {
    description:
      "Should be able to multiply two many digit floating point numbers",
    operation: "*", // 1.23456789 * 2.10987654 = 2.6047858281483007
    number1: "1.23456789",
    number2: "2.10987654",
    expectedResult: "2.6047858281483007",
  },
  {
    description: "Should be able to multiply two large integers",
    operation: "*", // 123456789 * 210987654 =
    number1: "123456789",
    number2: "210987654",
    expectedResult: "26047858281483010",
  },
];
