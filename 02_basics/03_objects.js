// objects
// two methods to declare a object, one -> constructor , two -> literal

// when we decalre it like a constroctor, a singleton is created , in other method it is not created.

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",  // this can be accesed like JsUser.name;   
    "full name": "Hitesh Choudhary",   // but this can only be accessed by JsUser["full name"];
    //                                    this and above are two methods to accesss the elements of objects
    [mySym]: "mykey1",                   // this is the syntax to declare a symbol int he object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
 //Object.freeze(JsUser)
// Object.freeze()  funtion helps use to freeze an object which doesnt 
// allow any further changes to that object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){           // function as a variable
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//console.log(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());