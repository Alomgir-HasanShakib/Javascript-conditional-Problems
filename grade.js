/* 

    Grade Calculator 

    create a simple javascript programme that takes a student's scores as input and returns their corresponding grade based on the following grading scale
    
    A: 90-100
    B:80-89
    c: 70-79
    D:60-69
    F:0-59

*/

const studenScores = 79;

if (studenScores >= 90) {
  console.log("A+");
} else if (studenScores >= 80) {
  console.log("B");
} else if (studenScores >= 70) {
  console.log("C");
} else if (studenScores >= 60) {
  console.log("D");
} else {
  console.log("F");
}
