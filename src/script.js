var n = "";
var age;
var weight;

function fetch() {
  n = document.getElementById("name").value;
  var age = Number(document.getElementById("age").value);
  var weight = Number(document.getElementById("weight").value);
  var result = "";
  calculate(age, weight);
  display(age);
}

function calculate(a, w) {
  if (a > 4 && a < 8) {
    if (w < 15) {
      result = "your weight is below recommended weight of 15Kg at the age of";
    } else if (w > 20) {
      result = "your weight is above the recommended weight of 20kg at the age of";
    } else {
      result = "your weight is perfect.";
    }
  } else if (a > 7 && a < 11) {
    if (w < 21) {
      result = "your weight is below recommended weight of 21kg at the age of";
    } else if (w > 25) {
      result = "your weight is above the recommended weight of 25kg at the age of";
    } else {
      result = "your weight is perfect.";
    }
  } else if (a > 10 && a < 16) {
    if (w < 26) {
      result = "your weight is below recommended weight of 26kg at the age of";
    } else if (w > 30) {
      result = "your weight is above the recommended weight of 30kg at the age of";
    } else {
      result = "your weight is perfect.";
    }
  } else if (a > 15 && a < 21) {
    if (w < 31) {
      result = "your weight is below recommended weight of 31kg at the age of";
    } else if (w > 40) {
      result = "your weight is above the recommended weight of 40kg at the age of";
    } else {
      result = "your weight is perfect.";
    }
  }
}
function display(a) {
  let res = "Hello " + n + " ! " + result + " " + a;
  document.getElementById("answer").innerHTML = res;
}
