function getGrade (grade){

    let result;


    if (grade >= 90 && grade <=100){
        result = "A"
    } else if (grade >= 80 && grade <=90){
        result = "B"
    }else if (grade >= 70 && grade <=80){
        result = "C"
    }else if (grade >= 60 && grade <= 70){
        result = "D"
    } else if (grade >= 50 && grade <= 60){
        result = "F"
    }

    return `Output: ${result}`;

}




console.log(getGrade(95)); // Output: "A"
console.log(getGrade(83)); // Output: "B"
console.log(getGrade(75)); // Output: "C"
console.log(getGrade(62)); // Output: "D"
console.log(getGrade(50)); // Output: "F"
