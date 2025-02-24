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