"use strict";

var arr = [1, 2, 3, 4, 5]

// map polyfill
// Array.map((val, i, arr)=>{})

// const myMap = function(cb){
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp
// }

// console.log(myMap.call(arr , (val, i, arr)=>{return val * 2}))


// foreach polyfill
// Array.foreach((val, i, arr)=>{})

// Array.prototype.myForeach = function(cb){
//     for (let i = 0; i < this.length; i++) {
//       this[i] = cb(this[i], i, this)
//     }
// }
// arr.myForeach((val, i, arr)=>{return val * 2})

// console.log(arr)


// filter polyfill
// Array.filter((val, i, arr)=>{})

// Array.prototype.myFilter = function(cb){
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)) temp.push(this[i])
//     }
//     return temp
// }

// console.log(arr.myFilter((val, i, arr)=>{return val > 2}))

// reduce polyfill
// Array.reduce((acc, curr, i, arr) => {}, initial)

// Array.prototype.myReduce = function(cb, init){
//     var accumulator = init

//     for (let i = 0; i < this.length; i++) {
//        accumulator = accumulator ? cb(accumulator, this[i], i, this) :  this[i]
//     }
//     return accumulator
// }

// console.log(arr.myReduce((acc, curr, i, arr)=>{return acc + curr}))
