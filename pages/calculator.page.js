import {
  build,
  number1,
  number2,
  operation,
  calculateButton,
  numberAnswer,
  clearButton,
  errorMessage,
  integerOnlyCheckbox,
} from "../selectors/calculator.selectors";

class Calculator {
  get $build() {
    return $(build); //$("#selectBuild");
  }
  get $number1() {
    return $(number1); //$("#number1Field");
  }
  get $number2() {
    return $(number2); // $(`#number2Field`);
  }
  get $operation() {
    return $(operation); //$(`#selectOperationDropdown`);
  }
  get $calculateButton() {
    return $(calculateButton); // $(`#calculateButton`);
  }
  get $numberAnswer() {
    return $(numberAnswer); // $(`#numberAnswerField`);
  }
  get $clearButton() {
    return $(clearButton); // $(`#clearButton`); // clearButton
  }

  get $errorMessage() {
    return $(errorMessage); // $(`#errorMsgField`);
  }

  get $integerOnlyCheckbox() {
    return $(integerOnlyCheckbox); // $(`#integerSelect`);
  }

  setOperationToSubtract() {
    this.$operation.selectByAttribute("value", "1");
  }

  setOperationToAddition() {
    this.$operation.selectByAttribute("value", "4");
  }

  setOperationToMultiplication() {
    this.$operation.selectByAttribute("value", "2");
  }

  setOperationToDivision() {
    this.$operation.selectByAttribute("value", "3");
  }

  setOperationToConcatenation() {
    this.$operation.selectByAttribute("value", "0");
  }

  open() {
    browser.url(browser.config.baseUrl);
  }

  show() {
    this.$build.selectByAttribute("value", "2");
    this.$build.scrollIntoView();
  }
}

export default new Calculator();
