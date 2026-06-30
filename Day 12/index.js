// Question 1: Function with Parameters
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 4));

// Question 2: Function with Return
function findSquare(num) {
    return num * num;
}
console.log(findSquare(6));

// Question 3: Global Scope
let score = 50;
function increaseScore() {
    score = score + 10;
}
increaseScore();
increaseScore();
increaseScore();
console.log(score);

// Question 4: Block Scope
if (true) {
    let city = "Mumbai";
    console.log(city);
}
// console.log(city); // Error: city is not defined (block scope)

// Question 5: Nested Functions
function college() {
    let department = "Computer";
    function student() {
        let name = "Rahul";
        console.log(department);
        console.log(name);
    }
    student();
}
college();

// Question 6: Simple Closure
function greeting() {
    let message = "Welcome to JavaScript";
    return function() {
        console.log(message);
    }
}
const printMessage = greeting();
printMessage();

// Question 7: Counter using Closure
function createCounter() {
    let counter = 100;
    return function() {
        counter = counter + 5;
        console.log(counter);
    }
}
const counter1 = createCounter();
counter1(); // 105
counter1(); // 110
counter1(); // 115
counter1(); // 120

// Question 8: Wallet using Closure
function wallet() {
    let balance = 5000;
    return function(amount) {
        balance = balance - amount;
        console.log(balance);
    }
}
const myWallet = wallet();
myWallet(1000); // 4000
myWallet(500);  // 3500
myWallet(700);  // 2800

// Question 9: Password Checker using Closure
function createLogin() {
    let password = "javascript123";
    return {
        checkPassword: function(input) {
            if (input === password) {
                console.log("Password Correct");
            } else {
                console.log("Wrong Password");
            }
        },
        passwordLength: function() {
            console.log(password.length);
        }
    }
}
const login = createLogin();
login.checkPassword("javascript123");
login.checkPassword("wrongpass");
login.passwordLength();

// Question 10: Independent Counters
function createCounter2() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    }
}
const counterA = createCounter2();
const counterB = createCounter2();

counterA(); // 1
counterA(); // 2
counterB(); // 1
counterA(); // 3
counterB(); // 2