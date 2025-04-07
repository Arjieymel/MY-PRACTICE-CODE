function isLeapYear (year){
    let leapyear = (year) / 4;

    let result = (year % 100 === 0) ? "Not leap year" : "Leap year";

    return result;

   
}



console.log(isLeapYear(2024)); // Output: "Leap Year"
console.log(isLeapYear(1900)); // Output: "Not a Leap Year"
console.log(isLeapYear(2000)); // Output: "Leap Year"
console.log(isLeapYear(2023)); // Output: "Not a Leap Year"


function isLeapYear(year) {
    let result;

    if (year % 400 === 0) {
        result = "Leap Year"; // Divisible by 400 → Leap Year
    } else if (year % 100 === 0) {
        result = "Not a Leap Year"; // Divisible by 100 but NOT by 400 → Not a Leap Year
    } else if (year % 4 === 0) {
        result = "Leap Year"; // Divisible by 4 but NOT by 100 → Leap Year
    } else {
        result = "Not a Leap Year"; // Not divisible by 4 → Not a Leap Year
    }

    return result;
}

// Example usage:
console.log(isLeapYear(2024)); // Output: "Leap Year"
console.log(isLeapYear(1900)); // Output: "Not a Leap Year"
console.log(isLeapYear(2000)); // Output: "Leap Year"
console.log(isLeapYear(2023)); // Output: "Not a Leap Year"
