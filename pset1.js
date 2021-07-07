/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge(ageNow = 26, numYears = 10) {
    let sum = ageNow + numYears;
    if (sum < 100) {
        let string = `In ${numYears} years, I will be ${sum}`;
        return string; 
    }
    else if (sum > 100) {
        return NaN;
    }
    else if ((typeof ageNow !== 'number') || (typeof numYears !== 'number')){
        return -1;
}
}
console.log(myAge());

const myAge = function(ageNow, numYears) {
    let sum = ageNow + numYears;
    let string = `In ${numYears} years, I will be ${sum}`;
    return string;
}
console.log(myAge());

const myAge = (ageNow, numYears) => {
    let sum = ageNow + numYears;
    let string = `In ${numYears} years, I will be ${sum}`;
    return string;
}
console.log(myAge());

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

function myConcatenate( firstStr = 'I', secondStr = "am", thirdStr = "iron man" ) {
    let mySentence = `${firstStr} ${secondStr} ${thirdStr}`;
    return mySentence;
}
console.log(myConcatenate());

const myConcatenate = function(firstStr, secondStr, thirdStr) {
    let mySentence = `${firstStr} ${secondStr} ${thirdStr}`;
    return mySentence;
}
console.log(myConcatenate());

const myConcatenate = (firstStr, secondStr, thirdStr) => {
    let mySentence = `${firstStr} ${secondStr} ${thirdStr}`;
    return mySentence;
}
console.log(myConcatenate());
//myConcatenate('I', 'am', 'iron man'); // 'I am iron man'*/

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a = 0, b = 0) {
   return a - b; 
}
console.log(subtract());

const subtract = function(a = 0, b = 0) {
    return a - b; 
}
     console.log(subtract());

const subtract = (a = 0, b = 0) => a - b;
console.log(subtract());
/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius = 1){
   return Math.PI * (radius ** 2);
    
}    
console.log(areaOfaCircle);

const area = function(radius = 1) {
    return Math.PI * (radius ** 2);
    
}    
console.log(areaOfaCircle);

const area = (radius = 1) => Math.PI * (radius ** 2);
console.log(area());
/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/
function fahrenheitToCelsius(F = 32){
    const C = ((F-32) * (5/9));
    const fahrenheitToCelsius = `${F}°F is ${C}°C.`;
    return fahrenheitToCelsius;
}
console.log(fahrenheitToCelsius());

const fahrenheitToCelsius = function(F = 32) {
    const C = ((F-32) * (5/9));
    const fahrenheitToCelsius = `${F}°F is ${C}°C.`;
    return fahrenheitToCelsius;
}
console.log(fahrenheitToCelsius());

const fahrenheitToCelsius = (F = 32) => {
    const C = ((F-32) * (5/9));
    const fahrenheitToCelsius = `${F}°F is ${C}°C.`;
    return fahrenheitToCelsius;
}
console.log(fahrenheitToCelsius());

/*

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(C = 0){
    let F = (C * 9/5) + 32;
    const celsiusToFahrenheit = `${C}°C is ${F}°F.`;
    return celsiusToFahrenheit;
}
console.log(celsiusToFahrenheit());

const celsiusToFahrenheit = function(C = 0) {
    let F = (C * 9/5) + 32;
    const celsiusToFahrenheit = `${C}°C is ${F}°F.`;
    return celsiusToFahrenheit;
}
console.log(celsiusToFahrenheit());

const celsiusToFahrenheit = (C = 0) => {
    let F = (C * 9/5) + 32;
    const celsiusToFahrenheit = `${C}°C is ${F}°F.`;
    return celsiusToFahrenheit;
}
console.log(celsiusToFahrenheit());

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

function isItTheWeekend(day) {

    if (day === "Saturday") {
       return 'Yes, it\'s the weekend';
    }
    
    else if (day === "Sunday") {
        return 'Yes, it\'s the weekend';
    }
    else {
     return 'No, it\'s the weekday';
    }
    
    }
    
    console.log(today("Monday"));

const today = (day) => {

    if (day === "Saturday") {
       return 'Yes, it\'s the weekend';
    }
    
    else if (day === "Sunday") {
        return 'Yes, it\'s the weekend';
    }
    else {
     return 'No, it\'s the weekday';
    }
    
    }
    
    console.log(today("Monday"));


const today = function isItTheWeekend(day) {

    if (day === "Saturday") {
       return 'Yes, it\'s the weekend';
    }
    
    else if (day === "Sunday") {
        return 'Yes, it\'s the weekend';
    }
    else {
     return 'No, it\'s the weekday';
    }
    
    }
    
    console.log(today("Monday"));

/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/
function absolute(num) {
    return Math.abs(num);
}
console.log(absolute());

const absolute = function(num) {
    return Math.abs(num);
}
console.log(absolute());

const absolute = (num = -1) => Math.abs(num);
console.log(absolute());

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

function countChars(nameString = "Jane Doe") {
    return nameString.length
}
console.log(countChars());

const countChars = function(nameString = "Jane Doe")) {
    return nameString.length
}
console.log(countChars());

const countChar = (nameString = "Jane Doe")) => nameString.length;
console.log(countChars("Osita"));

const simpleConditionalExamples = () => {
    if (true){
    console.log('this will show up!');
    }
    if (false){
    console.log('will this show up tho…?');
    }
    return 1;
    }
    simpleConditionalExamples();
