function atmWithdrawal(withdrawalAmount){

    let result = (withdrawalAmount % 10 === 0) ? "Transaction succesful!" : "Invalid Amount. Please entr a multiple of 10";

    return result;



}

console.log(atmWithdrawal(50));  // Output: "Transaction successful!"
console.log(atmWithdrawal(25));  // Output: "Invalid amount. Please enter a multiple of 10."
console.log(atmWithdrawal(100)); // Output: "Transaction successful!"
console.log(atmWithdrawal(37));  // Output: "Invalid amount. Please enter a multiple of 10."
