
console.log("2">1)
console.log("2 ">1)   // here strings get converted to numbers
console.log("22">1)
console.log("">1)

// now for Null

console.log( null >0);
console.log( null <0);
console.log( null ==0);
console.log( null >=0);  
// == and >,<,>=,<= operations run slighly different.
// here >,< converts the null to a number thst is zero and them compare it ,resulting null>=0 as "true"


console.log( undefined >0);
console.log( undefined<0);    // all false 
console.log( undefined ==0);
console.log( undefined >=0); 

// DONT USE COMPARISIONS WITH NULL AND UNDEFINED (NOT A GOOD PRACTICE)

//strict check (===)
/*
   == just compares the two values but,
   === makes sure that even the datatype of both are same.
*/

console.log("2"===2)  // results in false as they have different datatypes if the value are same.
