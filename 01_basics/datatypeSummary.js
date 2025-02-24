// Two types of Dataypes Primitive and none-promitive
//primitive:
// 7 types : String , number, booloean , null , BigInt, undefined , Symbol

// Non-primitive
// Array, objects, functions

// In primitive we will only speaak about the symbol

const a = Symbol(123)
const b= Symbol(123)
console.log( a===b);
console.log(typeof a);


//  symbol assigns unique to all the input values.

// refrenced or Non-primitive

const arr=["hello", "pcn", "sup?"]

console.log(arr)
console.log(typeof arr)


let myObj={
    name:"pcn",
    ag:22,
    collage:"KLE"
}

console.log(myObj);
console.log(typeof myObj);


const myfunction=function(){
    console.log(HI)
}

console.log(typeof myfunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory and its allocation

/*
in js among the two datatypes 
->primitive are all stored in "stack".
whenever the new variable is assigned the previously declared variable its values copy is 
assigned to the new variable.
-> Non-primitive are stored in the "heap".
whenever the new say object is assigned the previously declared object they both will be
refrencing the same memory space. hence changing one will affect other as well.

*/

// primitive-> stack (copy is assigned)
let var1= 100
let var2=var1
var2=200
console.log(var1);
console.log(var2);

// non-primitive -> heap (memory refrence is given)

let obj1={
    name:"pcn",
    rollNo:50
}

let obj2=obj1
obj2.rollNo=75

console.log(obj2.rollNo);
console.log(obj1.rollNo);
