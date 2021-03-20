export const testCases = [
  {
    description: "Should be able to subtract two positive integers",
    operation: "-",
    number1: "1500",
    number2: "2000",
    expectedResult: "-500",
  },
  {
    description: "Should be able to subtract zero from a negative integer",
    operation: "-",
    number1: "-3",
    number2: "0",
    expectedResult: "-3",
  },
  {
    description: "Should be able to subtract 0 from a positive integer",
    operation: "-",
    number1: "3",
    number2: "0",
    expectedResult: "3",
  },
  {
    description:
      "Should be able to subtract a floating point number from a negative integer",
    operation: "-", // -1 - 2.25 = -3.25
    number1: "-1",
    number2: "2.25",
    expectedResult: "-3.25",
  },
  {
    description:
      "Should be able to subtract an integer from a floating point number",
    operation: "-",
    number1: "9.35",
    number2: "1",
    expectedResult: "8.35",
  },
  {
    description:
      "Should be able to subtract a floating point number from an integer",
    operation: "-",
    number1: "9",
    number2: "1.35",
    expectedResult: "7.65",
  },
  {
    description: "Should be able to subtract two floating point numbers",
    operation: "-", // 0.29 - 1.35 = -1.06
    number1: "0.29",
    number2: "1.35",
    expectedResult: "-1.06",
  },
  {
    description:
      "Should be able to subtract two max-input floating point numbers",
    operation: "-", // 7.1234567 - 2.2109876 = 4.9124691
    number1: "7.1234567",
    number2: "2.2109876",
    expectedResult: "4.9124691",
  },

  {
    description:
      "Should be able to subtract an integer from a negative floating point number",
    operation: "-", // -1.33 - 2 = -3.33
    number1: "-1.33",
    number2: "2",
    expectedResult: "-3.33",
  },
  {
    description: "Should be able to subtract two large integers",
    operation: "-", // 123456789 - 210987654 = -87530865
    number1: "123456789",
    number2: "210987654",
    expectedResult: "-87530865",
  },
  {
    description:
      "Should be able to subtract two floating point numbers with many digits",
    operation: "-", // // 7.12345678 - 2.21098765 = 4.91246913
    number1: "7.12345678",
    number2: "2.21098765",
    expectedResult: "4.91246913",
  },
];
