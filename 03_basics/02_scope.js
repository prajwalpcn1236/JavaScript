//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// when we simply declare a function like in case1 we can call the function first and then
// even if the function is declared later on it wil be executed



// Case1
console.log(addone(5))

function addone(num){
    return num + 1
}


// But if we declare a function like in case2, then if you call a function before declaring it
// there will be a error, u can only access  a function after its declaration and not before it.

//Case2
addTwo(5)
const addTwo = function(num){
    return num + 2
}