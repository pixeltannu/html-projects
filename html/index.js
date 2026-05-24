let arr = [1,2,4,5,7]
// Index 0

// console.log(arr, type of arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
let a = [1,2,3,4,5,6]
// Last element remove karega
a.pop()

let b = [1,2,3,4]
// Last me 5 add karo
b.shift()
console.log(b)
// Array ko end mai new item add karta hai

b.unshift("JACK")
console.log(b)

// First item remove karega

// shift pop ka bhai hai
a.unshift("JACK")
//unshift push ka bhai hai
//array ke first mai add a karega

delete a[6]
//last element empty ho jayega toh waha memory allocated hain but waha nahi hai

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]
let result = a1.concat(a2, a3)
console.log(result) 

//returns a new array does not change existing arrays
//returns [1,2,3,4,5,6]

let numbers=[1,2,3,4,5]
numbers.splice(1,2)
// numbers index 1 se 2 tak delete ho jayega



// slice() — copy karta hai
//indexOf() — element dhundhta hai
// forEach() / map() / filter() — loops

// Method    Kya karta hai
// pop()     Last element hatata hai
// push()    Last mein add karta hai
// shift()   Pehla element hatata hai
// unshift() Pehle mein add karta hai
// concat()  Arrays jodta hai
// splice()  Beech se hatata hai