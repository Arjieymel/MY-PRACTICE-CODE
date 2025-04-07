function checkEvenOdd(number) {
    // Check if the number is even or odd
    let result = (number % 2 === 0) ? "Even" : "Odd";
    
    // Return the result
    return `${number} is ${result}.`;
}

// Example usage:
console.log(checkEvenOdd(10)); // Output: "10 is Even."
console.log(checkEvenOdd(7));  // Output: "7 is Odd."
console.log(checkEvenOdd(0));  // Output: "0 is Even."
console.log(checkEvenOdd(-3)); // Output: "-3 is Odd."

