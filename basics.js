// This is a single line comment

/*
  This is a multiline comment
*/

 // Array of fruit names
 var fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

 function sortFruitsDescending() {
   
   fruits.sort(function(a, b) {
     return b.localeCompare(a);
   });
   console.log(fruits);
 }

 sortFruitsDescending()

 // Write a program with FOR/IN loop
 const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }


  //Create an object "person" with properties firstname and lastname. Display these properties using 2 different ways of accessing.//
  const person1 = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  //dot notation
  console.log("Using dot notation:");
  console.log("First Name:", person1.firstName);
  console.log("Last Name:", person1.lastName);
  
  //bracket notation
  console.log("\nUsing bracket notation:");
  console.log("First Name:", person1['firstName']);
  console.log("Last Name:", person1['lastName'])



  // Write a program with variable hoisting(initialization first then declaration).
console.log(myVar); 
console.log(myFunc()); 

var myVar;

function myFunc() {
  return "Hello, World!";
}

myVar = 42;



'use strict'; // Enable strict mode

x = 10;
console.log(x);

/*JavaScript and Java are often confused due to their similar names, but they are actually quite different languages with different purposes, syntax, and features. Here are some key differences between JavaScript and Java:*/