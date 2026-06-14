// Array

var fruits = [
  ["mango"],
  "apple",
  "banana",
  "orange",
  "grapes",
  "kiwi",
  "papaya",
  "watermelon",
  "pineapple",
  "guava",
  "lichi",
  "pear",
  "cherry",
  "strawberry",
  "dragonfruit",
  "avocado",
  "muskmelon",
  "peach",
  "plum",
  "coconut",
  "Awdiz",
];

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

console.log((fruits.length - 1) / 2);
console.log(fruits[(fruits.length - 1) / 2]);

fruits[(fruits.length - 1) / 2] = "Mango King";

console.log(fruits[(fruits.length - 1) / 2]);

fruits[25] = "Hello";

console.log(fruits[25]);
console.log(fruits);
console.log(fruits[24]);