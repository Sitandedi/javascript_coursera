// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);      // Output: "I'm a  block-scoped var"
//console.log(blockLet);     //ReferenceError
//console.log(blockConst);    //ReferenceError

//function scope
/*function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
*/
{
    let a = 10;
    const b = 20;
    var c = 30;
  
    // Try to reassign all
    a = 100;         //  Allowed
    // b = 200;      //  Error: Assignment to constant variable
    c = 300;         //  Allowed

    /*
    let and var can be reassigned  in a block
    const cannot be reassigned — doing so throws a TypeError
    */
  
    console.log("Inside block:");
    console.log("a =", a); // 100
    console.log("b =", b); // 20
    console.log("c =", c); // 300 
}

//  2. Try to access and reassign these variables outside the block:

console.log(a); //  ReferenceError: a is not defined
console.log(b); //  ReferenceError: b is not defined
console.log("Outside block:");
console.log("c =", c); //  var is function-scoped or globally scoped

c = 999;               //  Allowed: var is accessible outside the block
console.log("New value of c:", c);