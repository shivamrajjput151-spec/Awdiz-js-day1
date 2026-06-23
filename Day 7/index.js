// 1. every()

// Question 1:
const nums1 = [10, 20, 30, 40];
console.log(nums1.every(num => num < 50));

// Question 2:
const ages = [18, 22, 25, 16, 30];
console.log(ages.every(age => age >= 18));

// 2. fill()

// Question 1:
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0);
console.log(arr1);

// Question 2:
const letters = ["A", "B", "C", "D", "E"];
letters.fill("X", 1, 3);
console.log(letters);

// 3. findLast()

// Question 1:
const nums2 = [12, 45, 78, 23, 90, 34];
console.log(nums2.findLast(num => num > 50));

// Question 2:
const nums3 = [5, 8, 11, 14, 17, 20];
console.log(nums3.findLast(num => num % 2 === 0));

// 4. findLastIndex()

// Question 1:
const nums4 = [10, 20, 30, 40, 50, 60];
console.log(nums4.findLastIndex(num => num > 35));

// Question 2:
const nums5 = [1, 3, 5, 8, 7, 10];
console.log(nums5.findLastIndex(num => num % 2 === 0));

// 5. includes()

// Question 1:
const tech = ["HTML", "CSS", "JavaScript"];
console.log(tech.includes("React"));

// Question 2:
const nums6 = [100, 200, 300, 400];
console.log(nums6.includes(300));

// 6. join()

// Question 1:
const players = ["Virat", "Rohit", "Rahul"];
console.log(players.join(" | "));

// Question 2:
const letters2 = ["M", "E", "R", "N"];
console.log(letters2.join(""));

// 7. lastIndexOf()

// Question 1:
const fruits = ["apple", "banana", "apple", "orange", "apple"];
console.log(fruits.lastIndexOf("apple"));

// Question 2:
const nums7 = [10, 20, 30, 20, 40, 20];
console.log(nums7.lastIndexOf(20));

// 8. reverse()

// Question 1:
const nums8 = [1, 2, 3, 4, 5];
nums8.reverse();
console.log(nums8);

// Question 2:
const techs = ["HTML", "CSS", "JavaScript"];
techs.reverse();
console.log(techs);

// 9. slice()

// Question 1:
const letters3 = ["A", "B", "C", "D", "E"];
console.log(letters3.slice(2, 4));

// Question 2:
const nums9 = [10, 20, 30, 40, 50, 60];
console.log(nums9.slice(-3));

// 10. splice()

// Question 1:
const months = ["Jan", "Mar", "Apr"];
months.splice(1, 0, "Feb");
console.log(months);

// Question 2:
const techs2 = ["HTML", "CSS", "PHP"];
techs2.splice(2, 1, "JavaScript");
console.log(techs2);

// 11. toString()

// Question 1:
const nums10 = [1, 2, 3, 4, 5];
console.log(nums10.toString());

// Question 2:
const techs3 = ["HTML", "CSS", "JavaScript"];
console.log(techs3.toString());

