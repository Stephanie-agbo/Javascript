//use math.floor to get integer values, +1 to ensure it rounds up to 5
let random = Math.floor(Math.random() * 5) + 1;


let userGuess =parseFloat(prompt("Guess one number between 1 and 5"));

if (userGuess == random) 
    {alert("Your guess was correct!!!");}

else 
    {alert(`Wrong. The number was ${random} `);}
  

