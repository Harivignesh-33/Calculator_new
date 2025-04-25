function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML = "Result: Invalid input";
      return;
    }

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          document.getElementById("result").innerHTML = "Result: Cannot divide by zero";
          return;
        }
        result = (num1 / num2).toFixed(4);
        break;
      default:
        result = NaN;
    }

    document.getElementById("result").innerHTML = isNaN(result)
      ? "Result: Error"
      : `Result: ${result}`;
  }

  function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerHTML = "Result: ";
  }