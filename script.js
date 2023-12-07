

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    }
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    }
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
    else {
      display.innerText += item.id;
    }
  };
});

document.addEventListener("keydown", function(event) {
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
      display.innerText = eval(display.innerText);
    }
    else if (display.innerText == "") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
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

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};