// string concatenation

//example # 1
let string1 = "john";
let string2 = "doe";

//concatenating string1 and strin2
let name = string1+string2;
console.log(name)

//name with space
let fullname = string1 + " " + string2
console.log(fullname)

//example # 2
let num1 = "14";
let num2 = "12";

let number = num1 + num2;
console.log(number); //the output will be 1412 because num1 and num2 are strings not numbers
console.log(typeof number);

//converting string to number
let num3 = Number(num1);
let num4 = Number(num2);

let number2 = num3 + num4;
console.log(number2); //now it will add both numbers
console.log(typeof number2)
