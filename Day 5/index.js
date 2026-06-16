var players = [];
console.log(players);

players.push("Dhoni");
players.push("Kohli");
players.push("Sharma");
console.log(players);
console.log(players[0]);

console.log("----------------------------------------");

var nums = [10, 20, 30, 40];
const last = nums.pop();
const secondLast = nums.pop();
console.log(nums, last, secondLast);

console.log("----------------------------------------");

const arr1 = [5, 10, 15, 20];
const first = arr1.shift();
console.log(arr1, first);

console.log("----------------------------------------");

const arr2 = [100, 200, 300];
arr2.unshift(50);
arr2.unshift(25);
console.log(arr2);

console.log("----------------------------------------");

const prices = [200, 400, 600];
const doubled = prices.map((price) => price * 2);
console.log(doubled);

const tripled = prices.map(function(price) {
    return price * 3;
});
console.log(tripled);
console.log(prices);

console.log("----------------------------------------");

const productPrices = [500, 1000, 1500];
const withGST = productPrices.map((price) => price * 1.18);
console.log(withGST);

console.log("----------------------------------------");

const numbers1 = [2, 4, 5, 7, 8, 9, 10, 11];
const oddNumbers = numbers1.filter((num) => num % 2 === 1);
console.log(oddNumbers);

const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers);

console.log("----------------------------------------");

const userData = [
    { name: "Rohit", active: true },
    { name: "Virat", active: false },
    { name: "Dhoni", active: true },
    { name: "Kane", active: false }
];

const activeUsers = userData.filter((user) => user.active);
console.log(activeUsers);

const inactiveUsers = userData.filter((user) => !user.active);
console.log(inactiveUsers);

console.log("----------------------------------------");

const values = [5, 10, 15, 20];
const sum = values.reduce((acc, num) => acc + num, 0);
console.log(sum);

console.log("----------------------------------------");

const cartItems = [250, 400, 750, 1200];
const totalCartPrice = cartItems.reduce((acc, price) => acc + price, 0);
console.log(totalCartPrice);

console.log("----------------------------------------");

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const count = data.reduce((acc) => acc + 1, 0);
console.log(count);

console.log("----------------------------------------");

console.log(5 > 3 ? "True" : "False");
console.log(2 > 7 ? "True" : "False");

console.log("----------------------------------------");

const randomNumbers = [12, 45, 67, 23, 89, 34];
const maxNumber = randomNumbers.reduce((acc, num) => acc > num ? acc : num, 0);
console.log(maxNumber);

const minNumber = randomNumbers.reduce((acc, num) => acc < num ? acc : num, randomNumbers[0]);
console.log(minNumber);

console.log("----------------------------------------");

const scores = [70, 80, 90, 100];
scores.forEach((score) => console.log(score * 2));

console.log("----------------------------------------");

const alphabets = ["A", "B", "C", "D", "E"];
console.log(alphabets.at(0));
console.log(alphabets.at(2));
console.log(alphabets.at(-1));

console.log("----------------------------------------");

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [7, 8, 9];
const merged = arr3.concat(arr4, arr5);
console.log(merged);

console.log("----------------------------------------");

const marks = [20, 45, 60, 75, 90];
const passingMark = marks.find((mark) => mark >= 35);
console.log(passingMark);

const numbers2 = [10, 25, 30, 55, 70];
const greaterThan50 = numbers2.find((num) => num > 50);
console.log(greaterThan50);

console.log("----------------------------------------");

const scores2 = [15, 25, 35, 45, 55];
const index = scores2.findIndex((score) => score > 30);
console.log(index);

const nums2 = [3, 5, 7, 8, 10];
const evenIndex = nums2.findIndex((num) => num % 2 === 0);
console.log(evenIndex);

console.log("----------------------------------------");

const original = [1, 2, 3, 4, 5];
const doubledArray = original.map((num) => num * 2);
console.log(original);
console.log(doubledArray);

const nums3 = [1, 2, 3, 4, 5, 6];
const greaterThan3 = nums3.filter((num) => num > 3);
console.log(greaterThan3);

const nums4 = [10, 20, 30, 40];
const total = nums4.reduce((acc, num) => acc + num, 0);
console.log(total);

const nums5 = [1, 3, 5, 7, 8];
const hasEven = nums5.some((num) => num % 2 === 0);
console.log(hasEven);

const nums6 = [5, 10, 15, -20];
const allPositive = nums6.every((num) => num > 0);
console.log(allPositive);