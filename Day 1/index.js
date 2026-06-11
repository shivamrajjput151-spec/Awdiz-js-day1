
var age = 25;
console.log(age, age, age);

var number = 1;     
console.log(number);     

number = 2;       
console.log(number);

var number = 3;  
console.log(number);   

console.log("-------------------");




let age2 = 25;
console.log(age2);

age2 = 26;
console.log(age2);

// let age2 = 27;
// console.log(age2);

console.log("-------------------");




const number3 = 20;
console.log(number3);         

// number3 = 21;              // ERROR: Assignment to constant variable

// const number3 = 22;        // ERROR: Cannot redeclare

console.log("-------------------");




age4 = 25;
console.log(age4);            
var age4;

console.log("-------------------");



// age5 = 25;                 // ❌ ERROR: Cannot access before initialization
// console.log(age5);
// let age5;

console.log("-------------------");




{
  var age6 = 25;
  let age7 = 25;
  const age8 = 25;
  console.log(age6);
  console.log(age7);
  console.log(age8);
}
console.log(age6);
// console.log(age7);          ERROR: not defined
// console.log(age8);          ERROR: not defined

console.log("-------------------");




var number2;
var number1 = 1;

{
  number2 = 2;
  let number3 = 3;
  const number4 = 4;
  
  console.log(number4);
  
  {
    console.log(number3);
    console.log(number2);
  }
}

console.log(number1);

console.log("-------------------");





//             var     let     const
// reassign    yes     yes     no
// redeclare   yes     no      no
// hoisting    yes     no      no
// scope     function block   block
