// Scope

// Types: Global, Function, Block

// {
//     var a = 'var is global scoped'

//     let b = 'let is block scoped'

//     const c = 'const is block scoped'
// }

// console.log(a)
// console.log(b)
// console.log(c)


// Variable shadowing

// (function shadow(){
//     let a = 'Hello'
//     if(true){
//         let a = 'Hai will replace Hello'
//         console.log(a)
//     }
//     console.log(a)
// })()

// Legal and Illegal shadowing

// (function shadowing(){
//     var a = 'Hello'
//     let b = 'Hai'
//     if(true){
//         let a = 'legal'
//         var b = 'illegal'
//         console.log(a)
//         console.log(b)
//     }
// })()

// Declaration

// var a // can be redeclared as many times
// var a

// let b // cannot be redeclared
// let b

// const c // cannot be redeclared
// const c

// Declaration without initialization

// var a //allowed
// let b //allowed
// const c //not allowed

// Re-Initialization

// var a = 1
// a = 2 //allowed

// let b = 1
// b = 2 //allowed

// const c = 1
// c = 2 //not allowed

// Hoisting

// console.log(a) // will get undefined
// var a = 1

// console.log(b) // Error because hoisted in temporal dead zone (time between initialization and declaration)
// let b = 1

// The declaration mentioned here is not same "declaring inside of your code", Your engine processes your variables in three steps:

// 1. Variable declaration (not same as decalaring a variable in the code) - Meaning defining the scope. Note that it does not mean that variable's memory has been decided also.

// 2. Variable assignment: Here Engine decides the memory for the variable and adds a default value for it. (default value: undefined)

// 3. Assignment: Assigning a value to the variable.


// Now which of the steps falls under Creation phase and Execution phases decided nature of the hoisting.

// For var, 1 & 2 happens in creation phase, hence even someone accessing it before the actual "declared in the code" gives you back "undefined" .

// For let and const: only 1 happens, 2 happens only when it hits the actual code declaration (let x, const r) so basically your variable have a scope but because assignment has not been done, It is said to be in TDZ (scope defined but not memory or default value)