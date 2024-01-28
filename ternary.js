/* 

you have teo numbers in two variables, called num1 and mnum2

now declared a variable called result .

    if num1 is bigger than num2 than result will be double of num1
    if not ,than value of the variable result will be the sum of num1 num2.

Write a simple if else

also write it  using ternery operator


*/

const num1 = 10;
const num2 = 20;
let result;

if (num1 > num2) {
  result = num1 * 2;
  console.log(result);
} else {
  result = num1 + num2;
  console.log(result);
}

const nums1 = 80;
const nums2 = 70;
let results;

nums1 > nums2
  ? console.log((results = nums1 * 2))
  : console.log((results = nums1 + nums2));
