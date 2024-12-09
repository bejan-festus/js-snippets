let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let searchValue = 20;

// Linear
// ( () => {
//     for(let i = 0; i < collection.length; i++){
//         if(searchValue === collection[i]){
//           return console.log('matched =>', collection[i])
//         }
//     }
//     console.log('No match found')
// })()


// Binary
// (function () {
//     let left = 0
//     let right = collection.length -1
//     while (left <= right){
//         let mid = Math.floor((left + right)/2)
//         if(collection[mid] === searchValue){
//             return console.log(`${collection[mid]} found at index ${mid}`)
//         }
//         if(searchValue < collection[mid]){
//             right= mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return console.log('No match found')
// })()


// Binary Recursive
// (function recursiveBinarySearch(left, right ){
//     if(left >= right){
//         return console.log('No match found')
//     }
//     let mid = Math.floor((left + right)/2) 
//     if(collection[mid] === searchValue){
//         return console.log(`${collection[mid]} found at index ${mid}`)
//     }
//     if(collection[mid] > searchValue){
//         recursiveBinarySearch(left, mid - 1 )
//     }else{
//         recursiveBinarySearch(mid + 1, right )
//     }
// })(0, collection.length)
