const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 

// the above creates the dc heros as the 4th element in the array marvel_heros
// as the arrays in js are capable of taking any datatype.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Note that concate provides a new string after joing arrays and doesnt change the original arrays


const all_new_heros = [...marvel_heros, ...dc_heros]

// this is a spread operation and is widely used as we can simply join multiple arrays into 
// a single new array.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// flat is a opertaion which is used to get the array involving multiple depths, the input needed 
// given to flat opertion is that upto what depth it needs to resolve the array?

console.log(Array.isArray("Hitesh")) //no
console.log(Array.from("Hitesh"))  // each char as an elment for array
console.log(Array.from({name: "hitesh"})) // interesting -> it doesnt understand how to resolve this thus endi+up giving empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // gives a array