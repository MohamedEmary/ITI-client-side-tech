// // compiled language C, C++, Rust, Go
// // compiler code -> Machine code text binary
// // faster

// // interpreted lang python, JS
// // interpreter line by line
// // slower

// // function logger2() {
// // 	console.log("clicked from 2");
// // }

// // alert()
// // console.log()

// // console.log("before");
// // alert(4);
// // console.log("after");

// // variable
// // var name = "mohamed";
// // console.log(name);

// // single line comment
// /*
// multi
// line
// comment
// */

// // + - * / % ++ --
// var num1 = 10;
// var num2 = 20;

// // var result = num1 / num2;
// // console.log(result);

// // // modulus operator %

// // num1 = 4;
// // num2 = 6;
// // result = num2 % num1;
// // console.log(result);

// // num1++;
// // num2--;
// // console.log(num2);

// num1 /= 5; // num1 = num1 / 5
// console.log(num1);

// num2 *= 3; // num2 = num2 * 3
// console.log(num2);

// // num1 += 5   ->   num1 = num1 + 5
// // num1 -= 5   ->   num1 = num1 - 5

// // number, string, boolean, undefined, null
// var ages = [30, 40, 15, 10];

// var differentData = ["mohamed", 23, true];
// console.log(differentData);

// // typeof
// // console.log(typeof name);

// var trueOrFalse = true;
// console.log(typeof trueOrFalse);
// console.log(typeof 4.5);
// console.log(typeof [4.5, 3, 5]);

// var differentTypes = 1;
// console.log(typeof differentTypes);
// var differentTypes = true;
// console.log(typeof differentTypes);
// var differentTypes = [1, 2, 3];
// console.log(typeof differentTypes);
// var differentTypes = "hello world";
// console.log(typeof differentTypes);

// // Typescript
// var input = document.querySelector("input");
// console.log(input);
// var nullVal = null;
// console.log(nullVal);
// console.log(typeof null);

// // declaration
// var noData;
// // console.log(Object.prototype.toString.call(null));
// console.log(typeof noData);
// // initialization
// noData = "some value";
// console.log(noData);
// // declaration & initialization
// var test = "abc";
// console.log(test);

// function sum(a, b) {}

// console.log(typeof sum(1, 2));

// var obj = {
// 	age: 22,
// };

// console.log(obj.address);

// var result2 = 0 / 0; // NaN
// console.log(result2);
// console.log(typeof result2);

// var result3 = "abc" - 2;
// console.log(result3);

// console.log(typeof Math.sqrt(-1));

// // IEEE 754
// // 32bit 64bit
// // 1bit sign 1
// console.log(1 / -0);

// console.log(parseInt("123"));
// console.log(parseInt("hello world"));

// // 'string' "string"
// var fName = "Mohamed ";
// var mName = "Ahmed Elsayed ";
// var lName = "Emary";

// // string concatenation
// var fullName = fName + mName + lName;
// console.log(fullName);

// // fullName = fullName + "Last";
// console.log(fullName + "Last");
// console.log(fullName);

// ===================================

// var num1 = 1;
// var num2 = "1";

// console.log(typeof num1);
// console.log(typeof num2);

// // == value
// // !=
// // console.log(num1 == num2);
// console.log(num1 != num2);

// // === type value
// // !==
// // console.log(num1 === num2);
// console.log(num1 !== num2);

// ===================================
// console.log(5 >= 5);
// && || !
console.log(true && false && true && true);
console.log(false || false || false || true);
console.log(!false);

// false 0 "" null undefined NaN
var variable1 = true;
var variable2 = false;

// if (boolean)
// falsy value => evaluate to false
// truthy value => evaluate to true
if (variable1) {
	console.log("inside if condition");
}

// ====================================

// alpha-numeric _
// letters (upper/lowercase)
// numbers (can't be the first letter)
var number = [1, 2, 3];

// PascalCase
// CollegeStudents

// camelCase
// collegeStudents

// snake_case
// college_students

// kebab-case (can't be used in js `-` will be considered as minus)
// college-students

// linters eslint
