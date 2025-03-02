
//IIFE - Immediately Invoked Function  Expression

/*
Creates private scopes for variables and functions, which prevents conflicts and unintended data modifications
Avoids global pollution
Keeps code modular and self-contained
*/

(function abc(){          //named iife
    console.log("HI")
})(); 
//  abc()

((name)=>{                //unamed iife
    console.log(`Welcome ${name}`)
})("pcn")