const userEmail = "h@hitesh.ai"

if(userEmail) {
    console.log("Got the useremail");
} else {
    console.log("Don't have user email"); 
}

//  falsy values
// false, 0, -0, BigInt on, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length ===0 ) {
//      console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} 

// Nullish Coalescing Operater (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20

// Terniary Operater
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

