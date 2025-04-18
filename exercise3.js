
let age = (prompt("What is your age?"));

// use this to tell the user when to return to check eligibility
let ageDifference = 18-age;
  
  if (age >= 18) 
    {alert("You are eligible to vote.");}
  
  else {
    alert(`Come back ${ageDifference} years later to check eligibility.`);
  }

