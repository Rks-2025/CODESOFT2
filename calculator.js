document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;
  
    document.querySelectorAll(".buttons button").forEach(function (button) {
      button.addEventListener("click", function () {
        const buttonValue = button.innerText;
  
        if (buttonValue >= "0" && buttonValue <= "9") {
          currentInput += buttonValue;
          display.value = currentInput;
        } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
          if (currentOperator) {
            firstOperand = calculate(firstOperand, currentInput, currentOperator);
            display.value = firstOperand;
            currentOperator = buttonValue;
            currentInput = "";
          } else {
            firstOperand = currentInput;
            currentOperator = buttonValue;
            currentInput = "";
          }
        } else if (buttonValue === "=") {
          if (currentOperator) {
            firstOperand = calculate(firstOperand, currentInput, currentOperator);
            display.value = firstOperand;
            currentOperator = "";
            currentInput = "";
          }
        } else if (buttonValue === "C") {
          currentInput = "";
          currentOperator = "";
          firstOperand = null;
          display.value = "";
        }
      });
    });
  
    function calculate(a, b, operator) {
      a = parseFloat(a);
      b = parseFloat(b);
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          return b;
      }
    }
  });

  