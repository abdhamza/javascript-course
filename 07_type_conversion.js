// data types in javascript
// 01. string "john doe"
// 02. number 0,1,2 3 
// 03. booleans
// 04. undefined
// 05. null
// 06. BigInt
// 07. Symbol 

//check data type of variable
let age = 13;
console.log(typeof age);

let name = "john doe";
console.log(typeof name);

// convert number to string 
// add empty string to number for converting number to string

//Method-1
let newage = age + "";
console.log(typeof newage);

//Method-2
age = String(age);
console.log(typeof age);

// convert string to number 
// add + sign before string to convert it to number

//Method-1
let new_name = +name;
console.log(typeof new_name);

//Method-2
name = Number(name);
console.log(typeof name);