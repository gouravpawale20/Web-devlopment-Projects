function appendvalue(value) {
  document.getElementById("display").value += value;
  // document.getElementById('display').value=" ";
}

function result() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "error";
  }
}

function square() {
  display.value = eval(display.value * display.value);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
}

function squareroot() {
  display.value = Math.sqrt(display.value);
}

function cuberoot() {
  display.value = Math.cbrt(display.value);
}

function reverse() {
  let num1 = document.getElementById("display").value;
  let result = num1.toString().split("").reverse().join("");
  console.log(result);
  display.value = result;
}

function factorial() {
  let n = document.getElementById("display").value;
  function fact(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  display.value = fact(n);
}

function count() {
  function counting(num) {
    return String(num).length;
  }
  let num1 = document.getElementById("display").value;
  display.value = counting(num1);
}

function primeno() {
  {
    var i,
      flag = 0;
    var n = document.getElementById("display").value;
    for (i = 1; i <= n; i++) {
      if (n % i == 0) {
        flag += 1;
      }
    }
    if (flag == 2) display.value = n + " is a Prime Number";
    else display.value = n + " is not a Prime Number";
  }
}

function arms() {
  let number;
  number = document.getElementById("display").value;
  let n = number.length;
  let sum = 0;
  let i = 0;
  while (i < n) {
    let digit = number[i] - "0";
    sum = sum + Math.pow(digit, n);
    i++;
  }
  if (sum == number) {
    display.value = number + " is an Armstrong Number";
  } else {
    display.value = number + " is not an Armstrong Number";
  }
}

function sortout() {
  let numArray = document.getElementById("display").value;
  let num = numArray.sort();
  display.value = num;
}

function evenOdd() {
  let evenOdd = document.getElementById("display").value;
  if (evenOdd % 2 == 0) {
    display.value = evenOdd + " is a Even Number";
  } else {
    display.value = evenOdd + " is a Odd Number";
  }
}

function reminder() {
  let reminder = document.getElementById("display").value;
  let checkR = reminder % 2;
  console.log(checkR);
  display.value = checkR;
}

function sumOfNaturalNumbers() {
  let number = document.getElementById("display").value;
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  display.value = sum;
}

function sumOfNumbers() {
  var n = document.getElementById("display").value;
  var remainder,
    sumOfDigits = 0;
  while (n) {
    remainder = n % 10;
    sumOfDigits = sumOfDigits + remainder;
    n = Math.floor(n / 10);
  }
  display.value = sumOfDigits;
}

function percent() {
  display.value = display.value / 100;
}

function exponent() {
  display.value += "**";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function multiplication() {
  let num = document.getElementById("display").value;
  for (var i = 1; i <= 10; i++) {
    display.value = num * i + " ";
  }
}

function pi() {
  display.value = display.value * Math.PI;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}
function ln() {
  display.value = Math.log(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function exp() {
  display.value = Math.exp(display.value);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

function leapyear() {
  let year = document.getElementById("display").value;
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    display.value = year + " is a leap year";
  } else {
    display.value = year + " is not a leap year";
  }
}

function LargestDigit() {
  const num = document.getElementById("display").value;
  const greatestDigit = (num = 0, greatest = 0) => {
    if (num) {
      const max = Math.max(num % 10, greatest);
      return greatestDigit(Math.floor(num / 10), max);
    }
    return greatest;
  };
  display.value = greatestDigit(num);
}

function clearA() {
  document.getElementById("display").value = "";
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
