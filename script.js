const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

//  Declaration for Expression
let expression = "";

buttons.forEach((btn) => {
  // Creating an event listeneer for each buttons to get their values
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value === "C") {
      expression = "";
      display.innerText = "0";
    } else if (value === "=") {
      try {
        // evaluating the expression recieved from user
        const result = eval(expression);
        display.innerText = result;
        expression = result.toString();
      } catch (error) {
        display.innerText = "Error";
        expression = "";
      }
    } else if (value === "←") {
      // The Deleting Part
      expression = expression.slice(0, -1);
      display.innerText = expression || "0";
    } else {
      expression += value;
      display.innerText = expression;
    }
  });
});

// Adding extra functionality for the Keyboard, going for that extra mark
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    expression += key;
    display.innerText = expression;
  } else if (key === "Enter") {
    try {
      const result = eval(expression);
      display.innerText = result;
      expression = result.toString();
    } catch {
      display.innerText = "Error";
      expression = "";
    }
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.innerText = expression || "0";
  } else if (key.toLowerCase() === "c") {
    expression = "";
    display.innerText = "0";
  }
});
