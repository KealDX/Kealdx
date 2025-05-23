console.log('Welcome To Our World');
/*
let name ='Keal Enterprise';
console.log(name);*/

//Variables

let firstName ='Keal';
let LastName ='Deehex';

//Constant
/*const interestrate = 0.3;
interestRate = 1;
console.log(interestRate);*/

// Primitive types

let age = 24;//Number literal
let isApproved = true;// boolean literal- for logic
/*let firstName = undefined*/
let selectedColors = ['red', 'blue'] ;

//Dynamic types
//objects

let person ={
  name: 'Keal',
  age: 24
};

console.log(person.name);

//Dot Notation
person.name = 'Knackey';
//Bracket Notation
let selection = 'name';
/*person['selection'] = 'Knackey4pf';*/

//Arrays
console.log(selectedColors. length);
selectedColors[2] = 'purple';

//Functions
//Performing a task
function greet(name, LastName) {
  console.log('welcome To Our world' + name + '' + LastName );
}
//Calculating a task
 function square(number){
  return number * number;
 }
 let number = square(2);
 console.log(number);
 //or 
 console.log(square(2));