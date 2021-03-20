class Calculator {
  get $build() {
    return $("#selectBuild");
  }
  get $number1() {
    return $("#number1Field");
  }
  get $number2() {
    return $(`#number2Field`);
  }
  get $operation() {
    return $(`#selectOperationDropdown`);
  }
  get $calculateButton() {
    return $(`#calculateButton`);
  }
  get $numberAnswer() {
    return $(`#numberAnswerField`);
  }
  get $clearButton() {
    return $(`#clearButton`); // clearButton
  }

  get $errorMessage() {
    return $(`#errorMsgField`);
  }

  get $integerOnlyCheckbox() {
    return $(`#integerSelect`);
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
