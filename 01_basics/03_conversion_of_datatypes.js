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