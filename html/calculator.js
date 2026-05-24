/* Create a faulty calculator using Javascript

This faulty calculator does following:
2. It takes two numbers as input from the user
3. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/






/* Faulty Calculator */

// Generates a random number between 0 and 1
let random = Math.random()

// Takes first number input from the user
let a = prompt("Enter first number")

// Takes operator input from the user
let b = prompt("Enter operator (+, -, *, /)")

// Takes second number input from the user
let c = prompt("Enter second number")

// Object used to replace operators with wrong operators
let obj = {
    "+": "-",   // + becomes -
    "*": "+",   // * becomes +
    "-": "/",   // - becomes /
    "/": "**"   // / becomes **
}

// If random number is greater than 0.1
// then calculator works correctly (90% chance)
if(random > 0.1){

    // eval() calculates the expression
    // Example: 10 + 5
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

}
else{

    // Changes the operator to wrong operator
    c = obj[c]

    // Performs wrong calculation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}  

