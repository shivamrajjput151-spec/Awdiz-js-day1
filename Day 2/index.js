// String 

let userName = `john_doe`;
let userFullName = "John Doe";
let userCity = "Mumbai";

console.log(userName, "userName");
console.log(userFullName, "userFullName");
console.log(userCity, "userCity");

console.log(typeof(userName));
console.log(typeof(userFullName));
console.log(typeof(userCity));



// Number

const studentAge = 20;
console.log(studentAge, "studentAge");
console.log(typeof(studentAge));



const mobileNumber = "9876543210";
console.log(mobileNumber, "mobileNumber");
console.log(typeof(mobileNumber));


// String - Password
const userPassword = "MySecure@123";
console.log(userPassword, "userPassword");
console.log(typeof(userPassword));




// Boolean
const isActive = false;

console.log(isActive, "isActive");
console.log(typeof isActive);


// undefined
var middleName;
console.log(middleName, "middleName");
console.log(typeof middleName);



// null
var employeeData = null;
console.log(employeeData, "employeeData");
console.log(typeof employeeData);



// Value Copy (Primitive)
let x = 50;
console.log(x, "x");
let y = x;
console.log(y, "y");
y = 100;
console.log(x, "x (after changing y)");
console.log(y, "y (after changing y)");



console.log(25 + 10);
console.log(15 - 8);
console.log(7 * 6);
console.log(40 / 5);
console.log(40 % 5); 

console.log(17 % 2); // 1 - odd
console.log(24 % 2); // 0 - even
console.log(33 % 2); // 1 - odd
console.log(48 % 2); // 0 - even
console.log(51 % 2); // 1 - odd
console.log(66 % 2); // 0 - even




var value1 = 25;
var value2 = "25";

// == checks only value, not data type
console.log(value1 == value2);  // true

// === checks value AND data type both
console.log(value1 === value2); // false

console.log("----------------------------------------");

// Comparison Operators
var p = 15;
var q = 30;

console.log(p < q);
console.log(p > q);
console.log(p == q);
console.log(p <= q);
console.log(p >= q);
console.log(p != q);

console.log("----------------------------------------");

// Extra practice
var num1 = 100;
var num2 = "100";

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

console.log("----------------------------------------");

// One more set
var score = 85;
var passingScore = 60;

console.log(score > passingScore);
console.log(score < passingScore);
console.log(score >= passingScore); 
console.log(score <= passingScore);