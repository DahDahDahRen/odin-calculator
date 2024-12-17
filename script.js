function app() {
  //* DOM
  const displayContainer = document.querySelector(".display-container");
  const numInputContainer = document.querySelector(".num-input-container");
  const operationInputContainer = document.querySelector(
    ".operation-input-container"
  );

  //* App Level variables
  let operandOne;
  let operandTwo;
  let operator = null;
  let previousFirstInputedNum = [];
  let previousSecondInputedNum = [];

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

  function returnAnOperator(operator) {
    return operator;
  }

  //! Operation function
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

  // console.log(operate(1, 2, "divide"));

  //! Attach an event listener to number buttons container
  numInputContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-num")) {
      //* Get the input number
      let userNumber = e.target.textContent;

      //* Append the number to the previous inputed number
      previousFirstInputedNum.push(userNumber);

      //* Assigned the the first inputed number to first operand varialbe
      operandOne = +previousFirstInputedNum.join("");

      //* Display the number to the UI
      displayContainer.textContent = "";
      displayContainer.textContent += +previousFirstInputedNum.join("");

      console.log(operandOne);
    }
  });

  //! Operation input add event listener
  operationInputContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-operation")) {
      //* Get the specified user operation
      const userSpecifiedOperation = e.target.textContent.trim();

      //* check the operation if addition
      if (userSpecifiedOperation === "+") {
        operator = "addition";

        //* Clear Display Container
        displayContainer.textContent = "";
      }

      //* check the operation if addition
      if (userSpecifiedOperation === "-") {
        operator = "subtraction";

        console.log(operator);
      }

      //* check the operation if addition
      if (userSpecifiedOperation === "/") {
        operator = "division";

        console.log(operator);
      }

      //* check the operation if addition
      if (userSpecifiedOperation === "X") {
        operator = "multiply";

        console.log(operator);
      }
    }
  });
}

app();
