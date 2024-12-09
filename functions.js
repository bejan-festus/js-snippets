// Function declaration or function definition or statement

// function square(num){
//     return num * num
// }

// Function expression

// const square = function (num){
//     return num * num
// }

// console.log(square(5)) 

// First class functions (Functions that can be treated like variables)

// function square(num){
//     return num * num
// }

// function display(fn){
//     console.log(`The output is ${fn(5)}`)
// }

// display(square)

// Imediately Invoked Function Expression (IIFE)

// (function square(num) {
//     console.log(num * num) 
// })(5)

// (function (x){
//     (function (y){
//         console.log(console.log(x)) // 1
//     })(2)
// })(1)

// Function scope

// for (var index = 0; index < 5; index++) {
//     setTimeout(function () {
//         console.log(index)
//     }, index * 100);
// }

// Function Hoisting
// Functions are hoisted completely i.e the complete function is copied to the parent scope

// foo()
// function foo(){
//     console.log(val)
//     var val = 5
// }

// var x = 21
// function foo(){
//     console.log(x)
//     var x = 20
// }
// foo()

// function foo() {
//     if (true) {
//         console.log(a); // undefined (hoisted but not yet assigned)
//         var a = 10;
//     }
//     console.log(a); // 10 (accessible because `var` is function-scoped)
// }

// foo();

// function foo(val){ // When we receive its called parameter
//     console.log(val)
// }
// foo(5) // when we send its called argument

// function foo(a, b, ...arr){ //This is called rest operator and it should last parameter
//     console.log(a * b * arr[0] * arr[1])
// }
// var arr = [2, 4]

// foo(1, 2, ...arr) // This is called spread operator

// Callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// document.addEventListener('click', function (){console.log('callback triggered')})

// Arrow functions
// const foo = (val) => console.log(val) // Arrow functions have implicit return normal functions dont
// foo('Arrow function called')

// function foo(){
//     console.log(arguments) //Normal functions have arguments keywork
// }
// foo(1, 2, 3)

// const bar = () => console.log(arguments) //Arrow functions dont have arguments keywork
// bar(1, 2, 3)

// user = {
//     userName: 'My name',
//     printNormal: function (){
//         console.log(this.userName)
//     },
//     printArrow:()=>{
//         console.log(this.userName)
//     }
// }
// user.printNormal() // Print 'My name' because this points to object itself
// user.printArrow() // Print undefined because this points to the this of enclosing scope
