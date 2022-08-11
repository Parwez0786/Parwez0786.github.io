console.log("fdf");
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenVal = "";
for (item of buttons) {
  //for all buttons
  item.addEventListener("click", (e) => {
    //clicck event on each button
    let buttonText = e.target.innerText; //particular button inner text stored in buttontext;
    console.log(buttonText); ///printing in console the button on which you clivcked
    if (buttonText == "X") {
      buttonText = "*";
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "C") {
      screenVal = "";
      screen.value = screenVal;
    } else if (buttonText == "=") {
      screen.value = eval(screenVal);

      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
    } else if (buttonText == "1") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "2") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "3") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "4") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "5") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "6") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "7") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "8") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "9") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "0") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "/") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "-") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "+") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "%") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "(") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == ")") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == ".") {
      screenVal += buttonText;
      screen.value = screenVal;
    } else if (buttonText == "sin") {
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.sin(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);

      // screenVal = screen.value;
    } else if (buttonText == "cos") {
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.cos(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
      // screenVal = screen.value;
    } else if (buttonText == "tan") {
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.tan(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
      //  screenVal = screen.value;
    } else if (buttonText == "exp") {
      var x = eval(screen.value);
      screen.value = Math.exp(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
      //  screenVal = screen.value;
    } else if (buttonText == "asin") {
      var x = eval(screen.value);

      screen.value = Math.tan(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
      //  screenVal = screen.value;
    } else if (buttonText == "tan") {
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.tan(x);
      setTimeout(function () {
        screen.value = "";
        screenVal = "";
      }, 2000);
      //  screenVal = screen.value;
    }
  });
}
