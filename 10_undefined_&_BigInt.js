//undefined
//whenever we create a variable and we do not assign value to it, its type becomes undefined

let name;
console.log(typeof name);

//similar is the case when variables are declared with var
var new_name;
console.log(typeof new_name);

//but we cannot do this woth constt
//constt cannot be left unassigned or undefined
// const new_name2;
// console.log(typeof new_name2);

//MAX_SAFE_INTEGER tells us how big value of integer can be stored in variable
console.log(Number.MAX_SAFE_INTEGER)
//the output tells us that 9007199254740991 this big number can be stored in variable
//if you think your variable can have value greater than that then you can use bigint

//declaring bigint type variable
//method # 1
let mynumber = 334n;
let mynumber_1 = BigInt(23);

console.log(mynumber);
console.log(mynumber_1);
//note that we can perform math operations only on same data types
//For Example: BigInt can only be added in BigInt  