const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const CLEAR_DISPLAY_TIMEOUT = 2000;
const ERROR_DISPLAY_TIMEOUT = 3000;

function safeEval(str) {
  try {
    return eval(str);
  } catch (e) {
    setTimeout(() => {
      if (display.innerText === "Erro!") {
        display.innerText = "";
      }
    }, ERROR_DISPLAY_TIMEOUT);
    return "Erro!";
  }
}

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    if (display.innerText === "Erro!") {
      display.innerText = "";
    }
    if (item.id == "clear") {
      display.innerText = "";
    }
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = safeEval(display.innerText);
    }
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), CLEAR_DISPLAY_TIMEOUT);
    }
    else {
      display.innerText += item.id;
    }
  });
});

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  if (display.innerText === "Erro!") {
    display.innerText = "";
  }
  if (event.key >= 0 && event.key <= 9) {
    display.innerText += event.key;
  }
  else if (event.key == ".") {
    display.innerText += ".";
  }
  else if (event.key == ",") {
    display.innerText += ",";
  }
  else if (event.key == "(") {
    display.innerText += "(";
  }
  else if (event.key == ")") {
    display.innerText += ")";
  }
  else if (event.key == "/") {
    display.innerText += "/";
  }
  else if (event.key == "*") {
    display.innerText += "*";
  }
  else if (event.key == "-") {
    display.innerText += "-";
  }
  else if (event.key == "+") {
    display.innerText += "+";
  }
  else if (event.key == "Enter") {
    if (display.innerText != "") {
      display.innerText = safeEval(display.innerText);
    }
    else if (display.innerText == "") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), CLEAR_DISPLAY_TIMEOUT);
    }
  }
  else if (event.key == "Backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

themeToggleBtn.addEventListener('click', () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  localStorage.setItem('isDark', isDark);
});

window.onload = () => {
  isDark = localStorage.getItem('isDark') === 'true';
  if (isDark) {
    calculator.classList.add("dark");
    themeToggleBtn.classList.add("active");
  }
};
