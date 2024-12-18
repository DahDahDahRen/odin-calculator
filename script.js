function app() {
  //* DOM
  const displayContainer = document.querySelector(".display-container");
  const inputContainer = document.querySelector(".input-container");
  const numInputContainer = document.querySelector(".num-input-container");
  const operationInputContainer = document.querySelector(
    ".operation-input-container"
  );

  //* App Level variables
  let operandOne = 0;
  let operandTwo = 0;
  let operator = null;
  let result = 0;
  let displayNum = "";

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
        return Math.floor(num1 / num2);
      },
    },
  };

  //! Operate
  function operate(num1, num2, operator) {
    //! Addition
    if (operator === "addition") {
      return calculator.mathOperators.add(num1, num2);
    }

    //! Subtraction
    if (operator === "subtract") {
      return calculator.mathOperators.subtract(num1, num2);
    }

    //! Divide
    if (operator === "divide") {
      return calculator.mathOperators.divide(num1, num2);
    }

    //! Multiply
    if (operator === "multiply") {
      return calculator.mathOperators.multiply(num1, num2);
    }
  }

  //! Input event listener
  numInputContainer.addEventListener("click", (e) => {
    //! Check if key pressed is number button
    if (e.target.classList.contains("btn-num")) {
      //! Get the first operand
      if (operator === null) {
        displayNum += e.target.dataset.num;
        displayContainer.textContent = "";
        displayContainer.textContent = displayNum;
        operandOne = +displayNum;
      } else {
        //! Get the second operand
        displayNum += e.target.dataset.num;
        displayContainer.textContent = "";
        displayContainer.textContent = displayNum;
        operandTwo = +displayNum;
      }
    }
  });

  operationInputContainer.addEventListener("click", (e) => {
    //! Get the operator
    if (e.target.classList.contains("basic-operator")) {
      operator = e.target.dataset.operator;
      displayContainer.textContent = 0;
      displayNum = "";
    }

    //! Perform an operation
    if (e.target.matches(".btn-equal")) {
      result = operate(operandOne, operandTwo, operator);
      displayContainer.textContent = result;
      displayContainer.style.color = "yellow";
    }

    //! Clear the calculator
    if (e.target.matches(".btn-clear")) {
      displayContainer.textContent = 0;
      displayContainer.style.color = "white";
    }
  });
}

app();
