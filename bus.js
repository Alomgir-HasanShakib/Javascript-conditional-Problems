/* 

Ticket fare Calculator : 

    --Children (age <=10) : free
    --Students get a 50% Discount
    -- Senior citizens (age >= 60) gets a 15% discount
    --otherwise Regular Ticket fare 800tk

*/

const students = false;
const age = 70;

if (students == true) {
  console.log("You'r get 50% Discount");
} else if (age >= 60) {
  console.log("You got 15% discounts");
} else if (age <= 10) {
  console.log("You don't need any ticket You'free in our bus");
} else {
  console.log("You have to pay 800 tk");
}
