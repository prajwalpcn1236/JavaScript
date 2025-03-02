
function myfunc(num1,num2)
{
    return num1+num2;
}

const abc = myfunc(2,3)
console.log(`The result is:${abc}`);

function array(...nums) //spread operation
{
    return nums
}

const a=array(1,2,3,4,5)

console.log(a);


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
