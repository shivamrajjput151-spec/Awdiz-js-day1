// NESTED LOOPS

// Question 1: Print pattern 11,12,21,22
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i + "" + j);
    }
}

// Question 2: Print 111, 222, 333
for (let i = 1; i <= 3; i++) {
    let str = "";
    for (let j = 1; j <= 3; j++) {
        str = str + i;
    }
    console.log(str);
}

// Question 3: Find smallest number using nested loops
let numbers = [45, 12, 78, 23, 9, 56];
let smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < smallest) {
            smallest = numbers[j];
        }
    }
}
console.log(smallest);

// Question 4: Count how many times each pair is formed
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// WHILE LOOP

// Question 5: Print numbers from 1 to 20 using while loop
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// Question 6: Print numbers from 20 to 1 using while loop
let j = 20;
while (j >= 1) {
    console.log(j);
    j--;
}

// Question 7: Sum of numbers from 1 to 10 using while loop
let k = 1;
let sum = 0;
while (k <= 10) {
    sum = sum + k;
    k++;
}
console.log(sum);

// Question 8: Count even numbers between 1 and 50 using while loop
let l = 1;
let evenCount = 0;
while (l <= 50) {
    if (l % 2 === 0) {
        evenCount++;
    }
    l++;
}
console.log(evenCount);

// OBJECTS

// Question 9: Create student object
const student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech",
    city: "Mumbai"
};
console.log(student);
console.log(student.name);
console.log(student.course);

// Question 10: Company object
const company = {
    name: "Tech Solutions",
    employees: 100,
    location: "Mumbai",
    departments: ["HR", "Development", "Sales"]
};
console.log(company.name);
console.log(company.location);
console.log(company.departments[2]);

// BONUS QUESTIONS

// Bonus 1: Mobile object with both ways
const mobile = {
    brand: "Samsung",
    model: "S25",
    price: 85000
};
console.log(mobile.brand);
console.log(mobile["brand"]);
console.log(mobile.model);
console.log(mobile["model"]);
console.log(mobile.price);
console.log(mobile["price"]);

// Bonus 2: Object with function
const person = {
    name: "Rahul",
    age: 25,
    greet: function () {
        return this.name;
    }
};
console.log(person.greet());

// Bonus 3: Find biggest number using nested loops
let numbers2 = [12, 34, 56, 78, 90, 23, 45];
let biggest = numbers2[0];
for (let i = 0; i < numbers2.length; i++) {
    for (let j = i + 1; j < numbers2.length; j++) {
        if (numbers2[j] > biggest) {
            biggest = numbers2[j];
        }
    }
}
console.log(biggest);

// Bonus 4: Print pattern
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }
    console.log(str);
}