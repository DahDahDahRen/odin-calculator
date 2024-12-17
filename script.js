function app() {
  //* DOM
  const displayContainer = document.querySelector(".display-container");
  const numInputContainer = document.querySelector(".num-input-container");
  const operationInputContainer = document.querySelector(
    ".operation-input-container"
  );

  //* App Level variables
  let operandOne = 0;
  let operandTwo = 0;
  let operator = null;

  //* Calculator Object
  const calculator = {
    mathOperators: {
      add: function (num1, num2) {
        return num1 + num2;
      },

      subtract: function (num1, num2) {
        return num1 - num2;
      },

      multiply: function (num1, num2) {
        return num1 * num2;
      },

      divide: function (num1, num2) {
        return num1 / num2;
      },
    },
  };

  //! Operate
  function operate(num1, num2, operator) {
    let result = 0;

    //! Check if operator is empty
    if (operator === "") {
      return console.log("No operator");
    }

    //! Check if operator is add
    if (operator === "add") {
      result = calculator.mathOperators.add(num1, num2);

      return result;
    }

    //! Check if operator is subtraction
    if (operator === "subtract") {
      result = calculator.mathOperators.subtract(num1, num2);

      return result;
    }

    //! Check if operator is multiplication
    if (operator === "multiply") {
      result = calculator.mathOperators.multiply(num1, num2, operator);

      return result;
    }

    //! Check if operator is division
    if (operator === "divide") {
      result = calculator.mathOperators.divide(num1, num2);

      return result;
    }
  }

  console.log(operate(1, 2, "divide"));
}

app();
