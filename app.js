//  ---------------------------- Chapter 17 To 20 Assignment Started -----------------------

//  ------------------------------- Question # 01 ---------------------------------

var multidimensionalArray = [[]];

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 02 ---------------------------------

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
console.log(matrix);

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 03 ---------------------------------

for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  
//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 04 ---------------------------------

var number = +prompt("Enter the number for multiplication table:");
var length = +prompt("Enter the length of the multiplication table:");
var result;

console.log("Multiplication table of number up to length terms:");
for (var i = 1; i <= length; i++) {
    result = number * i;
    console.log(number + " * " + i + " = " + result);
}

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 05 ---------------------------------

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 06 ---------------------------------

// Counting: 1, 2, 3, ..., 15
document.write("<b> Counting: </b> <br> <br> ");
for (var i = 1; i <= 15; i++ ) {
    document.write(i);
}

// Reverse counting: 10, 9, 8, ..., 1
document.write(" <br> <br> <b> Reverse counting: </b> <br> <br>");
for (var i = 10; i >= 1; i--) {
    document.write(i);
}

// Even: 0, 2, 4, ..., 20
document.write(" <br> <br> <b> Even:</b> <br> <br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i);
}

// Odd: 1, 3, 5, ..., 19
document.write(" <br> <br>  <b> Odd: </b> <br> <br>");
for (var i = 1; i <= 19; i += 2) {
    document.write(i);
}

// Series: 2k, 4k, ..., 20k
document.write(" <br> <br> <b> Series: </b> <br> <br>");
for (var i = 1; i <= 10; i++) {
    document.write(i * 2 + "k, ");
}

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 07 ---------------------------------

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

userInput = userInput.toLowerCase();

var found = A.includes(userInput);

if (found) {
    console.log(`Yes! ${userInput} is found in the list.`);
} else {
    console.log(`Sorry, ${userInput} is not found in the list.`);
}

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 08 ---------------------------------

var Arr = [24, 53, 78, 91, 12];
var largest = Arr[0];

for (var i = 1; i < Arr.length; i++) {
    if (Arr[i] > largest) {
        largest = Arr[i];
    }
}

console.log("The largest number in the array is:", largest);

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 09 ---------------------------------

var Arr = [24, 53, 78, 91, 12];
var smallest = Arr[0];

for (var i = 1; i < Arr.length; i++) {
    if (Arr[i] < smallest) {
        smallest = Arr[i];
    }
}

console.log("The smallest number in the array is:", smallest);

//    --------------------------- This Task Completed Here -----------------------


//  ------------------------------- Question # 10 ---------------------------------

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//    --------------------------- This Task Completed Here -----------------------

//  --------------------------Chapter 17 To 20 Assignment Completed ---------------------