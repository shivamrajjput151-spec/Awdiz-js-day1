// FOR LOOP PRACTICE (10)

// Question 1: Print numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Question 2: Print numbers from 50 to 100
for (let i = 50; i <= 100; i++) {
    console.log(i);
}

// Question 3: Print all even numbers between 1 and 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Question 4: Print all odd numbers between 1 and 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Question 5: Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// Question 6: Count numbers divisible by 5 between 1 and 100
let countDivisibleBy5 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        countDivisibleBy5++;
    }
}
console.log(countDivisibleBy5);

// Question 7: Multiplication table of 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Question 8: Print numbers from 20 to 1 in reverse
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// Question 9: Count even and odd numbers between 1 and 200
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even:", evenCount);
console.log("Odd:", oddCount);

// Question 10: Square of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`${i} -> ${i * i}`);
}

// IF-ELSE PRACTICE (10)

// Question 1: Check even or odd
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Question 2: Driving license eligibility
let age = 18;
if (age > 18) {
    console.log("Eligible");
} else if (age === 18) {
    console.log("Learner License");
} else {
    console.log("Not Eligible");
}

// Question 3: Pass or Fail
let marks = 40;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Question 4: Positive, Negative or Zero
let number = -5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Question 5: Vote eligibility
let voterAge = 20;
if (voterAge >= 18) {
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}

// Question 6: Greater number between two
let a = 25;
let b = 30;
if (a > b) {
    console.log("a is greater");
} else if (b > a) {
    console.log("b is greater");
} else {
    console.log("Both are equal");
}

// Question 7: Leap year
let year = 2024;
if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// Question 8: Assignment completion
let assignmentCompleted = true;
if (assignmentCompleted) {
    console.log("Good Job!");
} else {
    console.log("Please Complete It");
}

// Question 9: Divisible by 3 and 5
let numCheck = 15;
if (numCheck % 3 === 0 && numCheck % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both");
}

// Question 10: Movie entry
let personAge = 16;
if (personAge >= 18) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}

// SWITCH PRACTICE (10)

// Question 1: Fruits
let fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("Apple");
        break;
    case "Mango":
        console.log("Mango");
        break;
    case "Banana":
        console.log("Banana");
        break;
    default:
        console.log("Fruit Not Available");
}

// Question 2: Weekdays
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

// Question 3: Months
let month = "January";
switch (month) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    default:
        console.log("Month Not Found");
}

// Question 4: Grades
let grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Invalid Grade");
}

// Question 5: Traffic Lights
let signal = "Red";
switch (signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Wait");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// Question 6: Subjects
let subject = "Math";
switch (subject) {
    case "Math":
        console.log("Math");
        break;
    case "Science":
        console.log("Science");
        break;
    case "English":
        console.log("English");
        break;
    default:
        console.log("Subject Not Available");
}

// Question 7: Payment Methods
let payment = "UPI";
switch (payment) {
    case "UPI":
        console.log("UPI");
        break;
    case "Card":
        console.log("Card");
        break;
    case "Cash":
        console.log("Cash");
        break;
    default:
        console.log("Payment Method Not Supported");
}

// Question 8: Seasons
let season = "Summer";
switch (season) {
    case "Summer":
        console.log("Summer");
        break;
    case "Winter":
        console.log("Winter");
        break;
    case "Rainy":
        console.log("Rainy");
        break;
    default:
        console.log("Unknown Season");
}

// Question 9: Menu Options
let option = 1;
switch (option) {
    case 1:
        console.log("View Profile");
        break;
    case 2:
        console.log("Edit Profile");
        break;
    case 3:
        console.log("Logout");
        break;
    default:
        console.log("Invalid Option");
}

// Question 10: Programming Languages
let language = "JavaScript";
switch (language) {
    case "JavaScript":
        console.log("JavaScript");
        break;
    case "Python":
        console.log("Python");
        break;
    case "Java":
        console.log("Java");
        break;
    default:
        console.log("Language Not Supported");
}

// MIX (Bonus Questions)

// Question 1: Print 1 to 100 with Even/Odd
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, "Even");
    } else {
        console.log(i, "Odd");
    }
}

// Question 2: Count numbers divisible by 3 between 1 and 100
let countDivBy3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        countDivBy3++;
    }
}
console.log(countDivBy3);

// Question 3: Numbers divisible by both 2 and 5 (1 to 50)
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// Question 4: Sum of all even numbers between 1 and 100
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    }
}
console.log(evenSum);

// Question 5: Fizz (divisible by 3)
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}