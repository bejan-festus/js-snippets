// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created,
// at function creation time.

// Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
// The last part: "even if the parent function has returned" is called Closure.

// // Outer Scope
// var scope = 'outer'
// function foo(){
//     // Inner scope 2
//     var name = 'My name'
//     function displayName(val){
//         // Inner scope. This is a closure because it can assess variable from its outer scope
//       console.log(name, val, scope)
//     }
//    return displayName
// }
// const bar = foo()
// bar(1)
// foo()(2)

// // global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// let count = 0;

// (function printCount(){
//     if(count === 0){
//         let count = 1; // Scoped to this block
//         console.log(count); // Logs 1
//     }
//     console.log(count); // Logs 0 (outer count remains unchanged)
// })();


// function createBase(num){
//     return function (innerNum){
//         return num + innerNum
//     }
// }
// const addSix = createBase(6)
// console.log(addSix(10))
// const addSeven = createBase(7)
// console.log(addSeven(10))


// function expensiveCalculation(){
//     var arr = []
//     for (let index = 0; index < 1000000; index++) {
//         arr[index] = index * index
//     }

//     return function(accessIndex){
//         return console.log(arr[accessIndex])
//     }
// }
// const closure = expensiveCalculation()
// console.time()
// closure(100)
// console.timeEnd()
// console.time()
// closure(200)
// console.timeEnd()

// // Creating block scope using closure
// for (var i = 0; i < 3; i++) {
//      function inner (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     inner(i);
// }

// Creating private variables using closures

// function counter(){
//     var _count = 0
//     function add(val){
//         _count += val
//     }
//     function get(){
//         return _count
//     }
//     return {
//         add, get
//     }
// }

// const c = counter()
// c.add(10)
// c.add(5)
// console.log(c.get())

// // Module pattern using closures

// var module = (function (){
//    function privateMethod(){
//     console.log('Private method')
//    }
//    function publicMethod(){
//     console.log('public method')
//    }

//    return {publicMethod}
// })()

// module.publicMethod()
// module.privateMethod() // not accesible

// Call a function only once using closure

// function isCalled(){
//     let callCount = 0
//     return function(){
//         if(callCount > 0){
//             console.log('Already called')
//         }else{
//             callCount++
//             console.log('Calling')
//         }
//     }
// }

// const call = isCalled()
// call()
// call()
// call()

// function once(func, context){
//     let ran
//     return function(...args){
//         if(func){
//             ran = func.call(context || this, ...args)
//             func = null
//         }
//         return ran
//     }
// }

// hello = once((a, b)=>console.log('Hello', a, b))
// hello(1, 2)
// hello()

// // Memoize using closures

function myMemoize(func, context){
    let cache = {};
    return function(){
        const argsCache = JSON.stringify(arguments)
        if(!cache[argsCache]){
            cache[argsCache] = func.apply(context || this, arguments)
        }
        return cache[argsCache]
    }
}

 expensiveCalculation = (val1, val2)=>{
    for (let index = 0; index < 1000000; index++) {
    }
    return val1 * val2
}

const m1 = myMemoize(expensiveCalculation, {})
console.time()
console.log(m1(2, 2)) 
console.timeEnd()
console.time()
console.log(m1(2, 2)) 
console.timeEnd()






