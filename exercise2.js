
let num1 = prompt("Enter a number");

let operator = prompt("Enter an operator (e.g, +, -, *, /)");

let num2 = prompt("Enter another number");

let result;


  if (operator == "+") {
    result = num1 + num2;
    alert("The answer is " + result);
  } 
  
  else if (operator == "-") {
    result = num1 - num2;
    alert("The answer is " + result);
  } 
  
  else if (operator == "*") {
    result = num1 * num2;
    alert("The answer is " + result);
  } 
  
  else if (operator == "/") {
    
    if (num2 == 0) {
      alert("For now, it cannot go.");
    } 
    
    else {
      result = num1 / num2;
      alert("The answer is " + result);
    }
  } 
  
  else {
    alert("I don't understand the operator. Please use +, -, *, or /.");
  }

