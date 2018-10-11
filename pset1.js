/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

// function myAge( ageNow, numYears ) {
       
// }

// Function Expression


const age = function myAge(ageNow, numYears) {
    return ageNow + numYears;
}
console.log(age(4, 5) /*return 9*/)
// Fat Arrow

const myAge = (ageNow, numYears) => ageNow + numYears;
console.log(myAge(5, 5) /*return 10*/)

/******************
Concatenate Strings

Concatenating string variables

- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thridStr
- Concatenate all three arguments in a variable called mySentence
    * console out mySentence variable
- Call myConcatenate function
******************/

// function myConcatenate( firstStr, secondStr, thirdStr ) {
    
// }

// myConcatenate('I', 'am', 'iron man'); // 'I am iron man'

const sentence = function myConcatente(firstStr = "", secondStr ="", thirdStr =""){
    return `${firstStr} ${secondStr} ${thirdStr}`;
}

let mysentence = sentence("lol", "goodbye", "hello")
console.log(mysentence)

const sentence2 = (firstStr = "", secondStr = "", thirdStr = "") => `${firstStr} ${secondStr} ${thirdStr}`;

let mysentence2 = sentence2("ll", "gooye", "heo")
console.log(mysentence2)

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

// function subtract(a,b) {
    
// }

const sub = function reduce (a ,b){
    return b - a;
}

console.log(sub(1 , 2))

const sub2 = (a, b) => b - a;

console.log(sub2( 5, -5))

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


// function areaOfaCircle(radius){
    
    
// }    

const areaC = function answer(r){
    return Math.PI * (r ** 2)
}

console.log(areaC(5))

const areaC2 = (r) => Math.PI * (r ** 2)

console.log(areaC(5))

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

const fToC = function faren (F){
    return (F - 32) * 5/9;
}

console.log(fToC(32))

const fToC2 = F => (F - 32) * 5/9;

console.log(fToC(212))

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/

const cToF = function cel (C){
    return (C * 9/5) + 32;
}

console.log(cToF(0))

const cToF2 = C => (C * 9/5) + 32;

console.log(cToF2(100))
/******************
Is it the weekend?

Please write a function called "isItTheWeekend" that has two conditions:

If it is the weekend, return 'Yes, it's the weekend'
If it is not the weekend, return 'No, it's the weekday';
A working example would be:

var today = isItTheWeekend();

console.log(today); // No, it's the weekday

If you are having trouble, please note that Javascript has a helpful built-in function to help get the current day
******************/



/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/

const absolute = function abso(a){
    return Math.abs(a);
}

console.log(absolute(-6))

const absolute2 = a => Math.abs(a);

console.log(54)

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

const countCharacter = function countName(name){
    return name.length
}

console.log(countCharacter("Nadav"))

const countCharacter2 = name => name.length

console.log(countCharacter("Crocs Dem Out"))