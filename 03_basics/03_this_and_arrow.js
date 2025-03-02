const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"   
// user.welcomeMessage()   // username updated this will show the updated name

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // cannot use this in the function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // same here
// }

const arrow = () => {
    console.log("HI");
    
}
arrow()

const chai =  () => {                   // arrow function
    let username = "hitesh"
    console.log(this.username);           // cannot access arrow func with this
}


//  chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//  const addTwo = (num1, num2) =>  num1 + num2

 //const addTwo = (num1, num2) => ( num1 + num2 )

 const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


//  const myArray = [2, 5, 3, 7, 8]

//  myArray.forEach((num)=>{console.log("Hi")})