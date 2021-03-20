import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases, divisionByZero } from "../resourses/division";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`Division Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToDivision();
  });

  it(`${divisionByZero.description.description}`, () => {
    let { number1, number2, expectedResult } = divisionByZero;
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    expect(calculatorPage.$errorMessage).toBeEnabled();
  });

  testCases.forEach((testCase) => {
    let { description, operation, number1, number2, expectedResult } = testCase;
    it(`${description}`, () => {
      waitAndSetValue(calculatorPage.$number1, number1);
      waitAndSetValue(calculatorPage.$number2, number2);
      waitAndClick(calculatorPage.$calculateButton);

      let actualResult = waitAndGetValue(calculatorPage.$numberAnswer);
      chaiExpect(parseFloat(actualResult).toFixed(8)).to.equal(
        parseFloat(expectedResult).toFixed(8)
      );

      browser.pause(1000);
    });
  });
});
