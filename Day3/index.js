// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// solution:-

let a = 1;

if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let x = 3;
let y = 6;
let z = 8;

if (x > y && x > z) {
  console.log("x is greater");
} else if (y > z && y > x) {
  console.log("y is greater");
} else {
  console.log("z is greater");
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let num = 8;

let day;

switch (num) {
  case 1:
    day = "monday";
    break;

  case 2:
    day = "tuesday";
    break;

  case 3:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  case 7:
    day = "sunday";
    break;
  default:
    day = "bc in 1 week there are 7 days";
}

console.log(day);

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 24;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 75 && score <= 90:
    grade = "B";
    break;
  case score >= 60 && score <= 75:
    grade = "C";
    break;
  case score >= 45 && score <= 60:
    grade = "D";
    break;
  case score >= 35 && score <= 45:
    grade = "E";
    break;
  default:
    grade="bhai padhai chorday business main focus kar"  
}

console.log(grade);

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let n = 9;

let m = n % 2 == 0 ? "even" : "odd";

console.log(m);




// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.



let year = 2020;
let leapYear;

year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ? leapYear=true : leapYear=false

if(leapYear){
  console.log(`${year} is a leap year`);
}else{
  console.log(`${year} is a not leap year`);
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
// - Implement and understand basic if-else control flow.
// - Use nested if-else statements to handle multiple conditions.
// - Utilize switch cases for control flow based on specific values.
// - Apply the ternary operator for concise condition checking.
// - Combine multiple conditions to solve more complex problems.
