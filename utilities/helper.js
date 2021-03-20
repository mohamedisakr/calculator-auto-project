const waitForTextChange = (element, text, timeout = 3000) => {
  browser.waitUntil(
    () => {
      return element.getText() === text;
    },
    { timeout, timeoutMsg: `expected text to be different after ${timeout}s` }
  );
};

const waitAndClick = (element, timeout = 3000) => {
  element.waitForDisplayed({ timeout });
  element.click();
};

const waitAndSetValue = (element, val, timeout = 3000) => {
  element.waitForDisplayed({ timeout });
  element.setValue(val);
};

const waitAndGetValue = (element, timeout = 3000) => {
  element.waitForDisplayed({ timeout });
  return element.getValue();
};

export { waitForTextChange, waitAndClick, waitAndSetValue, waitAndGetValue };
