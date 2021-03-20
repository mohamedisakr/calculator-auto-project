import { expect as chaiExpect } from "chai";
import calculatorPage from "../pages/calculator.page";
import { testCases } from "../resourses/addition";
import {
  waitAndClick,
  waitAndSetValue,
  waitAndGetValue,
  waitForTextChange,
} from "../utilities/helper";

describe(`Addition Scenario`, () => {
  before(() => {
    calculatorPage.open();
    calculatorPage.show();
    calculatorPage.setOperationToAddition();
  });

  it("clear button should clear answer field", () => {
    let number1 = "12";
    let number2 = "3";
    let actualResult = "15";
    waitAndSetValue(calculatorPage.$number1, number1);
    waitAndSetValue(calculatorPage.$number2, number2);
    waitAndClick(calculatorPage.$calculateButton);

    browser.pause(2000);
    waitAndClick(calculatorPage.$clearButton);
    waitForTextChange(calculatorPage.$numberAnswer, "");
    let newResult = waitAndGetValue(calculatorPage.$numberAnswer);
    chaiExpect(newResult).to.be.empty;
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
});
