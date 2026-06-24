// Question 1: Print numbers from 20 to 1 using a for loop


for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// Question 2: Print numbers from 50 to 40 in reverse order


for (let i = 50; i >= 40; i--) {
    console.log(i);
}

// Question 3: Print all elements one by one


let fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Question 4: Print only the first and last elements


let cities = ["Mumbai", "Pune", "Delhi", "Bangalore"];
console.log(cities[0]);
console.log(cities[cities.length - 1]);

// Question 5: Find the index of "Rahul"


let students = ["Virat", "Rohit", "Rahul", "Kane"];
for (let i = 0; i < students.length; i++) {
    if (students[i] === "Rahul") {
        console.log(i);
    }
}

// Question 6: Find the index of "Orange"


let fruits2 = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits2.length; i++) {
    if (fruits2[i] === "Orange") {
        console.log(i);
    }
}

// Question 7: Check whether "Python" exists


let languages = ["HTML", "CSS", "JavaScript", "React"];
let found = false;
for (let i = 0; i < languages.length; i++) {
    if (languages[i] === "Python") {
        console.log(i);
        found = true;
    }
}
if (!found) {
    console.log("Language not found");
}

// Question 8: Find the index of 40


let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 40) {
        console.log(i);
    }
}

// Question 9: Print all elements in reverse order


let colors = ["Red", "Blue", "Green", "Yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

// Question 10: Search for "Dog"


let animals = ["Cat", "Tiger", "Lion", "Elephant"];
let foundAnimal = false;
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Dog") {
        console.log(i);
        foundAnimal = true;
    }
}
if (!foundAnimal) {
    console.log("Dog is not present in array");
}