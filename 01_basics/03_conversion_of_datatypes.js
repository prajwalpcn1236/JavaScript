let age=33

let age_in_string = String(age)
console.log(typeof age_in_string); //string
console.log(age_in_string); //33

let string="33"

let age_in_num = Number(string)
console.log(typeof age_in_num); //number
console.log(age_in_num);  //33

/*
"03abc" -> number -> typeof: number , but value is NaN (NOt a NUmber)
"pcn" -> number -> typeof: number , but value is NaN (NOt a NUmber)
all numbers directly get converted to string without any problem
33 -> "33"
*/

// boolean

let temp=true;

let temp_in_int= Number(temp)
console.log(typeof temp_in_int); //number
console.log(temp_in_int) // 1

// string to boolean

let temp2="";

let temp2_in_bool= Boolean(temp2)
console.log(typeof temp2_in_bool); //boolean
console.log(temp2_in_bool) // false

/*
""-> bool : false
"askjbaccq" -> bool : true
*/


// operations on different datatypes
// we can have all the arthemetic operations on the console.log() like add,sub,mul,div,rem etc
// operations with string and num:

let str1= "pcn"
let str2=" Hi"
console.log(str1+str2);// pcn Hi

let a=2

console.log(str1 + 2 +2); // if first string is thier then evrything is treated as string and is appended in the end.
console.log(2 +2 + str1)  // if first numbers are there than they get added first and then appended to string.
console.log("pcn" + a +2)
console.log(2+ 2 + "pcn");






