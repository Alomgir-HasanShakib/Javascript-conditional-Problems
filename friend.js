/*

If you get more than 80 than inside your your frinds scores.
        if your friend get more than 80.Than go for a lounch
        if your frinds get below 80 but greater tha or equal 60 then tell Your friends , Good luck next time
        if your frinds get below 60 but greater tha or equal 40 then keep Your friends messenge unseen
        if your frinds get less than 40  Block your Friends
If you get less than 80 than go to home and act like sad

Note: use nested if-else-if-else



*/

const myScores = 81;

if (myScores > 80) {
  const friendScores = 81;
  if (friendScores > 80) {
    console.log("Go for a lounch");
  } else if (friendScores <= 80 && friendScores >= 60) {
    console.log("Good Luck next time");
  } else if (friendScores < 60 && friendScores >= 40) {
    console.log("Sorry i haven't seen your message");
  } else {
    console.log("sorry you'r blocked");
  }
} else {
  console.log("I'm so sad today");
}
