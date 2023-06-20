//Following are some useful string methods

//trim()
//it is used to remove free spaces from a string
let name = "      khan     ";
console.log(name);
console.log(name.length); //it will give you the length 15
//using trim function to remove spaces and storing it in new variable
let newname = name.trim(); 
console.log(newname.length);
console.log(newname);

//toUpperCase()
//it is used to convert string to upper case
console.log(name.toUpperCase());

//toLowerCase()
//it is used to convert string to lower case
console.log(name.toLowerCase());

//slice (start index, end index)
let dogName = "putin"
console.log(dogName)
let newdogName = dogName.slice(1,4);
console.log(newdogName)