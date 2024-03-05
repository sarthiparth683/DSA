// video no:- 3 Time 41:21
// let myArray1 = [1,2,3,4,5];
// console.log(myArray1.includes(1));
// console.log(Math.max(...myArray1));
// console.log(Math.min(...myArray1));
// let sum = myArray1.reduce((a,b)=> a+b, 1);
// console.log(sum);
// let reverse = myArray1.reverse();
// console.log(reverse);
// let arr =[1,2,3];
// To add Elements...
// arr.push(4,5,6);
// arr.unshift(-1,0)

// To remove Elements...
// arr.pop();
// arr.pop();
// arr.shift();
// arr[1] = 10;  // to update array
// let arr1 =[1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// // let arr3 = arr1.concat(arr2);
// let newarr = arr1.concat(arr2,arr3);
// console.log(newarr);

// let arr1 =[1,2,3];
// for(let i = 0; i<=arr1.length - 1; i++){
//     console.log(arr1[i]);
// }

// arr1.forEach(
//     function (element) {
//         console.log(element);
//     }
// )

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = [1,2,3,4,5];
// let arr2 = arr1.filter(function (element) {
//     return element > 2;
// });
// let arr2 = arr1.map(function (element) {
//     return element * 2;
// });
 
// console.log(arr2);
// let sum = arr1.reduce( function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(sum);

// let arr1 = [2,4,10];
// let max = arr1.reduce(function (accumulator, currentValue) {
//     return Math.max(accumulator, currentValue)
// }, -Infinity); // here infinity can be starting value for accumulator
// console.log(max);

// let allEven = arr1.reduce(function (accumulator, currentValue) {
//     return accumulator && (currentValue % 2 == 0)
// }, true); 
// console.log(allEven);

// let arr1 = [[1,2,3],[4,5,6],[7,8,,9]];
// let flattenarr = arr1.flat();
// console.log(flattenarr);
// console.log(arr1);

// let arr1 = new Array(4).fill(3);
// console.log(arr1);

// let arr1 = new Array(3).fill().map(()=>{
//     return Math.random()
// });
// console.log(arr1);

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr2 = arr1.slice(1,3)
// console.log(arr2);
// let arr2 = arr1.join("*&@ ");
// console.log(arr2);

// let arr = [10,4,5,9,78,45,7,2,3,1,8];
// let arr1 = arr.sort((a,b) => a-b);
// let arr1 = arr.sort((a,b) => b-a);

// let str = ["f","b", "g", "h", "a", "d","c","e"];
// let arr1 = str.sort();
// console.log(arr1);
// let users = [{name:"hj", age:25},
// {name: "vj", age: 12},
// {name: "aj", age:30}]
// let arr1 = users.sort((a,b)=> a.age - b.age)
// console.log(arr1);

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.splice(1,1,"8989");
// console.log(arr);
// let arr1 = arr.splice(1,6);
// console.log(arr1);

// let arr = [1,2,3,3,4,4,5,6,7,8,9];
// let arr1 = arr.filter((value,index)=>{
//     console.log(arr.indexOf(value),index);
//     return arr.indexOf(value) === index;
// }) 
// console.log(arr1);

// let arr = [1,2,3,3,4,4,5,6,7,8,9];
// let arr = [2,4,6,8];
// let allEven = arr.every((x)=> x%2 === 0);
// console.log(allEven);
// let atleastOneEven = arr.some((x)=> x%2 === 0);
// console.log(atleastOneEven);

let arr = [21,5,8,12,4];
let arr1 = [51,6,7,45,8];
let common = arr.filter((value)=> arr1.includes(value));
console.log(common);

