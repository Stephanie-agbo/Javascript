
let num1 = parseFloat(prompt("Enter a number"));

let operator = prompt("Enter an operator (e.g, +, -, *, /)");

let num2 = parseFloat(prompt("Enter another number"));

  if (operator == "+") {
    let result1 = num1 + num2;
    alert("The answer is "  + result1);
  } 
  
  if (operator == "-") {
    let result2 = num1 - num2;
    alert("The answer is " + result2);
  } 
  
  if (operator == "*") {
    let result3 = num1 * num2;
    alert("The answer is " + result3);
  } 
  
  if (operator == "/") {
    let result4 = num1 / num2;
      alert("The answer is " + result4);
    } 
  
  else {
    alert("Your operator might be wrong. Please use +, -, *, or /.");
  }

  
