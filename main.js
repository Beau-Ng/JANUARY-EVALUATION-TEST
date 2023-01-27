//QUESTION NO 2 
//EXAMPLES OF DATA TYPES:
//  Strings :Strings are how words are represented in javascript.<br>
//They are usually within single or double quotes or back ticks
Eg:
var Strings = "This is a string";

//Null :
//Null is when the value of a variable is set Null. Meaning it has no value
//Eg: 
var nullValue = null;


// Undefined:
// Undefined is when the variable has no values or has no return value.
//Eg: 
var undefinedValue;

//    Arrays: 
// Arrays is a container in javascript that can hold multiple strings.
// They are usually seperated by commas.
//Eg: 
let myArray = ["beans", "rice", "meat", 0];


// Numbers: These are numbers in javascript.
// Eg:
var myNumbers = 12;

//END OF QUESTION 2

//QUESTION NUMBER 7
//Change the 19.80 to an integer and “45.90” to an actual number	

let nonInteger = 19.80
let integerValue = parseInt(19.80);
console.log(integerValue)


let stringNumber = "45.90"
let actualNumber = +stringNumber;
console.log(actualNumber)
//END OF QUESTION 7


//QUESTION NUMBER 6

var fruits = ["Mango", "Orange", "Banana"];

//A. add lemon to the beginning of the array
fruits.unshift("Lemon");
console.log(fruits);

//B. remove the last item in the array
console.log(fruits.pop());

//C. join the array to another array novel 
//= [“Harry Potter”, “Rich dad, poor dad”, “Game of throne”] to form a new array called mixedArray.

let novel = ["Harry Potter", "Rich Dad, Poor Dad", "Game of Thrones"];
let mixedArray = fruits.concat(novel);
console.log(mixedArray);
//END OF QUESTION 6


//QUESTION NUMBER 5
//Given that text = “I love pizza”, extract pizza from the string. Also, replace “pizza” with “Kung fu”

let text = "I love Pizza";
let extractedText = text.slice(7, 12);
console.log(extractedText);

let replacedText = text.replace("Pizza", "Kung fu")
console.log(replacedText);
//END OF QUESTION 5


//QUESTION NO.4

//Explain four array methods you know and give examples.

//1. Array(): is used to create an empty array. it can also specify the amount of arrays that you can create
//EG:
var myNewArray = Array();
console.log(myNewArray);
//EG2:
var myNewArray2 = Array(3);
console.log(myNewArray2);
//The above example will create three empty arrays.
//END OF QUESTION 4

//2. fill(): is used to fill in the empty arrays created with Array() with the value specified in the brackets.
//EG:
var myFilledArray = Array(3).fill("boobs");
console.log(myFilledArray)

//:pop(): helps to remove the last item in an array
//Eg.
let sports = ["basketball", "volleyball", "tennis"];
sports.pop();
console.log(sports);

//.concat(): this joins more than one array together.
//Eg:
let frontEnd = ["html", "css", "javascript", "react"];
let backEnd = ["python"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//END OF QUESTION 2
//Write a function that finds the area of a circle and also another function that solves the perimeter of a square.

//PERIMETER OF A SQUARE
function perimeterOfASquare(a) {
    p = 4 * a;
    return p + "cm";
}
console.log(perimeterOfASquare(4));

//AREA OF A CIRCLE
function areaOfACircle(r) {
    var π = 3.14159;
    a = π * (r**2);
    return a + "cm";
}
console.log(areaOfACircle(3));



//QUESTION NO.1

// let animals = [
//     {

//     }