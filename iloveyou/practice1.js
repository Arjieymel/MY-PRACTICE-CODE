var n = prompt ("enter a positive integer:");
var sum = 0;
var i = 1;

if (n < 1){
    alert("Please enter a valid number:");
} else {
    while (i <= n){
        sum += i;
        i = i + 1;
    }
    alert("The sum is: "+ sum);
}

//Declare variable n set to prompt"enter a valid number"
//Declare variable sum set to 0 
//Declare var i set to 1

//if var n less than var i 
//Display "please enter a valid number" using alert

//ELSE//

//While var i is less than and equal to var n 
// add i to sum
//increament i
//Display "the sum is" increament by sum