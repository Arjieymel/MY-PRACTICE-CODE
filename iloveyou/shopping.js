function getFinalPrice(totalBill) {
    let discount = 0; 

    if (totalBill >= 120) {
        discount = 0.2;
    } else if (totalBill >= 75) {
        discount = 0.1;
    } else if (totalBill < 40) {
        discount = 0;
    }

    let finalPrice = totalBill - (totalBill * discount);

    return `Final price: $${finalPrice.toFixed(2)}`;
}


console.log(getFinalPrice(120)); 
console.log(getFinalPrice(75));  
console.log(getFinalPrice(40));  
