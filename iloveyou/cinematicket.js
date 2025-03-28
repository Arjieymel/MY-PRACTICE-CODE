function getTicketPrice(age) {
    let price;

    if (age >= 0 && age <= 12) {
        price = 10; 
    } else if (age >= 13 && age <= 17) {
        price = 12; 
    } else if (age >= 18 && age <= 59) {
        price = 15; 
    } else if (age >= 60) {
        price = 8; 
    } else {
        return "Invalid age";
    }

    return `Ticket Price: $${price}`;
}

// Example usage:
console.log(getTicketPrice(10));  
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(30));  
console.log(getTicketPrice(65));  
console.log(getTicketPrice(-5));  
