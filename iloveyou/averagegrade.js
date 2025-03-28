function gradeCalculator(score1, score2, score3) {

    average = (score1 + score2 + score3) / 3;
   
    let result = average >= 70 ? "Passed" : "Failed";

    return `Average: ${average.toFixed(2)} - ${result}`;
}

var passed = gradeCalculator(90, 80, 70);
var failed = gradeCalculator(50, 60 ,65);
console.log(passed);
console.log(failed);