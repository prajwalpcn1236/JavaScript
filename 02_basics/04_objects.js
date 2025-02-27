// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   // classic array joining problem, within obj3 obj2 is created
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// console.log(obj3)
// console.log(obj1)
// empty object is considered as source and others are target

// const obj32= Object.assign(obj1, obj2, obj4) 
// console.log(obj32);
// console.log(obj1)
// if done withouot empty string obj1 is considered as target and is modified.


//const obj3 = {...obj1, ...obj2} // simple use spread operarion to join multiple objects.
// console.log(obj3);


// Returns from API's -> Json format

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // prints variables inside object
// console.log(Object.values(tinderUser)); //prints values of data inside object
// console.log(Object.entries(tinderUser)); // returns a array with the pair of variable with its value.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks wether this variable is present in the object or no?


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// usual return format from json calls
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// might also be in array format
[
    {},
    {},
    {}
] 