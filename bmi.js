/*
    BMI calculator and healty catagory 

    create a javascript programm that calculates the body mass index and assign a health category based on the BMI balues.Use nested if-else statements to determine the health category.

    --Calculate BMi using the formula : BMI = weight (kg) / (height (m))^2 or using your own formula.
    -- BMI <18.5, you are underweight.
    --BMI >= 18.5 and BMI <= 24.9. You are normal.
    --BMi >= 25 and BMI <= 29.9 you are overweight.
    --otherwise you'r opese
*/

const bmi = 22.5;

if (bmi < 18.5) {
  console.log("You are Under weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are over weight");
} else {
  console.log("You are obese");
}
