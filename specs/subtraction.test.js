import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/subtraction";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
} from "../utilities/helper";

describe(`Subtraction Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToSubtract();
  });

  testCases.forEach((testCase) => {
    let { description, operation, number1, number2, expectedResult } = testCase;
    it(`${description}`, () => {
      waitAndSetValue(calculatorPage.$number1, number1);
      waitAndSetValue(calculatorPage.$number2, number2);

      waitAndClick(calculatorPage.$calculateButton);
      let actualResult = waitAndGetValue(calculatorPage.$numberAnswer);

      chaiExpect(actualResult).to.equal(expectedResult);
      browser.pause(1000);
    });
  });

  it("Integers only checkbox should remove the decimal places", () => {
    let number1 = "10.25";
    let number2 = "5.50";
    let actualResult = "4.75";
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);
    const oldResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(actualResult).to.equal(oldResult);

    waitAndClick(calculatorPage.$integerOnlyCheckbox);
    // const trimmed = waitAndGetValue(calculatorPage.$numberAnswer);
    let newResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(parseInt(newResult)).to.equal(parseInt(actualResult));
  });
});
