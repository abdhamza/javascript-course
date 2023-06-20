//template string
let age = 22;
let name = "john doe"

let line = "my name is " + name + " and my age is " + age;
console.log(line); 

//another way to print the line is to use backticks and $ sign
//$ sign is used to call values from variables
let line2 = `my name is ${name} and my age is ${age}`
console.log(line2)