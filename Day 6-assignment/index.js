// Q1) Create an empty array called fruits and add "Apple", "Mango", and "Banana" 
// using push(). Print the array.

let fruits=[];

fruits.push("Apple")
fruits.push("Mango")
fruits.push("Banana")

console.log(fruits);


// Question 2:

// Create an array cities = ["Mumbai"]. Add "Pune" and "Delhi"
//  using push() and print the second city.

let cities=["Mumbai"];

cities.push("pune");
cities.push("delhi");
 console.log(cities);


//  2. pop()
// Question 1:

// Create an array [10, 20, 30, 40, 50]. Remove the last element using pop()
//  and print both the removed element and updated array.

let numbers = [10, 20, 30, 40, 50];

const lastNumber = numbers.pop();
const secondLastnumber = numbers.pop();

console.log(lastNumber, secondLastnumber );



// Question 2:

// Create an array of colors ["Red", "Blue", "Green"]. Remove the last two colors 
// and print the remaining array.

let colors = ["Red", "blue", "Green"];
colors.pop();
colors.pop();

console.log(colors);



// 3. shift()
// Question 1:

// Create an array ["Virat", "Rohit", "Rahul"]. Remove the first player and 
// print the removed player.

let players = ["Virat", "Rohit", "Rahul"];

const injured = players.shift();
console.log(injured);



// Question 2:

// Create an array [100, 200, 300, 400]. Remove the first element
//  and print the updated array.

let Runs = [100, 200, 300, 400];
const updatedRuns = Runs.shift();
console.log(updatedRuns);



// 4. unshift()
// Question 1:

// Create an array [2, 3, 4]. Add 1 at the beginning using unshift().

let num = [2, 3, 4];
num.unshift(1);
console.log(num);


// Question 2:

// Create an array ["B", "C", "D"]. Add "A" at the start and print the array.

let alpha = ["B", "C", "D"];
alpha.unshift("A");
console.log(alpha);


// 5. map()
// Question 1:

// Create an array [1, 2, 3, 4, 5]. Use map() to create a
//  new array containing squares of all numbers.

let num1 = [1, 2, 3, 4, 5];
const num2 = num1.map(num =>  num*num)
console.log(num2);



// Question 2:

// Create an array of prices [100, 200, 300]. Add 10% tax to each price using map().

let prices = [100, 200, 300];
const gstPrices = prices.map(prices => prices+(prices * 10 / 100) );
console.log(gstPrices);


// 6. filter()
// Question 1:

// Create an array [1,2,3,4,5,6,7,8]. Use filter() to get all even numbers.


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// Use a different variable name
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Question 2:

// Create an array [12, 45, 7, 89, 23]. Use filter() to get numbers greater than 20.

let numbers = [12, 45, 7, 89, 23];
const max = numbers.filter(num => num>20);
console.log


// 7. filter() with Objects
// Question 1:
// const employees = [
//   { name: "Amit", active: true },
//   { name: "Riya", active: false },
//   { name: "John", active: true },
// ];

// Find all active employees.


const employees = [
  { name: "Amit", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true },
];

const activeEmployees = employees.filter(employee => employee.active);
console.log(activeEmployees);

// Question 2:
// const products = [
//   { name: "Laptop", available: true },
//   { name: "Mobile", available: false },
//   { name: "TV", available: true },
// ];

// Find all available products.


const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];

const availableProduct = products.filter(elec => elec.available);
console.log(availableProduct); 





// 8. reduce() - Sum of Numbers
// Question 1:
// Use reduce() to find the sum of [5, 10, 15, 20].

let marks = [5, 10, 15, 20];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log(totalMarks);


// Question 2:
// Use reduce() to find the total of [100, 200, 300, 400].

let amounts = [100, 200, 300, 400];
const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);

console.log(totalAmount);


// 9. reduce() - Cart Total
// Question 1:

// Calculate the total bill of cart items [500, 1200, 800].

let cartItems = [500, 1200, 800];
const totalBill = cartItems.reduce((sum, item) => sum + item, 0);
console.log(totalBill);


// Question 2:

// Calculate the total salary from [25000, 30000, 40000].
let salaries = [25000, 30000, 40000];
const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
console.log(totalSalary);


// 10. reduce() - Count Elements
// Question 1:
// Count the number of elements in [1,2,3,4,5,6] using reduce().

let elements = [1, 2, 3, 4, 5, 6];
const countElements = elements.reduce((count) => count + 1, 0);
console.log(countElements);


// Question 2:

// Count the number of students in ["A", "B", "C", "D"] using reduce().

let students = ["A", "B", "C", "D"];
const totalStudents = students.reduce((count) => count + 1, 0);
console.log(totalStudents);

// 11. Ternary Operator ? :
// Question 1:

// Check whether 10 is greater than 5. Print "Yes" otherwise "No".

const result = 10 > 5 ? "Yes" : "No";
console.log(result);


// Question 2:
// Check whether a number num = 15 is even or odd using the ternary operator.

let num3 = 15;
const checkNumber = num3 % 2 === 0 ? "Even" : "Odd";
console.log(checkNumber);


// 12. reduce() - Find Maximum
// Question 1:

// Find the largest number in [5, 12, 8, 20, 3].

let values = [5, 12, 8, 20, 3];
const largestNumber = values.reduce((max, value) =>
  value > max ? value : max
);

console.log(largestNumber);


// Question 2:

// Find the maximum marks from [67, 89, 45, 98, 76].

let examMarks = [67, 89, 45, 98, 76];
const maxMarks = examMarks.reduce((max, mark) =>
  mark > max ? mark : max
);

console.log(maxMarks);


// 13. forEach()
// Question 1:

// Print double of every number in [2, 4, 6, 8] using forEach().

let evenNums = [2, 4, 6, 8];

evenNums.forEach(num => {
  console.log(num * 2);
});


// Question 2:

// Print the square of each number in [1, 2, 3, 4] using forEach().

let squareNums = [1, 2, 3, 4];

squareNums.forEach(num => {
  console.log(num * num);
});


// 14. at()
// Question 1:

// Create an array ["HTML", "CSS", "JavaScript"] and print the first element using at().

let technologies = ["HTML", "CSS", "JavaScript"];
console.log(technologies.at(0));


// Question 2:

// Create an array [10, 20, 30, 40] and print the last element using at(-1).

let values2 = [10, 20, 30, 40];
console.log(values2.at(-1));


// 15. concat()
// Question 1:

// Combine [1,2,3] and [4,5,6] using concat().

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const combinedArray = arr1.concat(arr2);

console.log(combinedArray);


// Question 2:

// Combine ["HTML", "CSS"] and ["JS", "React"] into a new array.

let frontend1 = ["HTML", "CSS"];
let frontend2 = ["JS", "React"];

const frontendStack = frontend1.concat(frontend2);

console.log(frontendStack);


// 16. find()
// Question 1:

// Find the first number greater than 50 in [10, 25, 60, 80, 40].

let nums1 = [10, 25, 60, 80, 40];
const firstGreaterThan50 = nums1.find(num => num > 50);
console.log(firstGreaterThan50);


// Question 2:

// Find the first even number in [1, 3, 5, 8, 10].

let nums2 = [1, 3, 5, 8, 10];
const firstEvenNumber = nums2.find(num => num % 2 === 0);
console.log(firstEvenNumber);


// 17. findIndex()
// Question 1:

// Find the index of the first number greater than 20 in [5, 10, 25, 30, 15].

let nums3 = [5, 10, 25, 30, 15];
const index1 = nums3.findIndex(num => num > 20);
console.log(index1);


// Question 2:

// Find the index of the first odd number in [2, 4, 6, 7, 8].

let nums4 = [2, 4, 6, 7, 8];
const index2 = nums4.findIndex(num => num % 2 !== 0);
console.log(index2);


// 18. Array Index Access []
// Question 1:

// Create an array ["India", "USA", "Japan"] and print the first country.

let countries = ["India", "USA", "Japan"];
console.log(countries[0]);


// Question 2:

// Create an array [100, 200, 300, 400] and print the third element.

let scores = [100, 200, 300, 400];
console.log(scores[2]);


