//Boolean and comparison operator
//boolean can either be true or false

let num_1 = 4;
let num_2 = 6;
let num_3 = 6;
let num_4 = 8;

console.log(num_1<num_2);
console.log(num_3>num_2);
console.log(num_1<=num_2);
console.log(num_3>=num_2);

// -------------------------------

// == and === equality comparison
// The == (loose equality) operator performs type coercion, meaning it tries to convert the operands to a common type before making the comparison. It allows for comparisons between different types, such as comparing a string to a number.
console.log(5 == "5");  // true (number 5 is equal to string "5" after coercion)
console.log(true == 1); // true (boolean true is equal to number 1 after coercion)
console.log(null == undefined); // true (both null and undefined are loosely equal)

// The === (strict equality) operator does not perform type coercion and requires both the value and type to be the same for equality. It does not attempt to convert the operands to a common type.
console.log(5 === "5");  // false (number 5 is not strictly equal to string "5")
console.log(true === 1); // false (boolean true is not strictly equal to number 1)
console.log(null === undefined); // false (null and undefined have different types)

// -------------------------------

// != and !== inequality comparison
// The != (loose inequality) operator performs type coercion before making the comparison. It checks if the values are not equal, allowing for type conversions.
console.log(5 != "5");  // false (number 5 is equal to string "5" after coercion)
console.log(true != 1); // false (boolean true is equal to number 1 after coercion)
console.log(null != undefined); // false (both null and undefined are loosely equal)

// !== (strict inequality) operator does not perform type coercion and requires both the value and type to be different for inequality. It does not attempt to convert the operands to a common type.
console.log(5 !== "5");  // true (number 5 is not strictly equal to string "5")
console.log(true !== 1); // true (boolean true is not strictly equal to number 1)
console.log(null !== undefined); // true (null and undefined have different types)
