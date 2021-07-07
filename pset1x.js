/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/
// DECLARATION

// function myAge (ageNow,numYears){
//     return ageNow + numYears;
// }
// console.log(myAge(26,24))

// ___________________________________________________

// EXPRESSION

// const myAge = function myAge( ageNow, numYears ) {
//     return numYears + ageNow
//     }
    
//     console.log (myAge(26, 4))


// ----------------------------------------------------
// FAT ARROW

// const myAge = (ageNow, numYears) => {
//     return ageNow + numYears;
// }

// console.log(myAge(26,14))

// -----------------------------------------------------

// const myAge =(ageNow, numYears) => ageNow + numYears

// console.log(myAge(26,4))

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
// DECLARATION
// function myConcatenate ( firstStr, secondStr, thirdStr ) {
//     theSentence = firstStr + " " + secondStr + " " + thirdStr
//     return theSentence 
// }

// console.log('test', myConcatenate('I', 'am', 'iron man')); // 'I am iron man'

// -----------------------------------------------------------------

// EXPRESSION

//  const myConcatenate = function myConcatenate (firstStr, secondStr, thirdStr) {
//     return (firstStr + secondStr + thirdStr)
// }
    
//     console.log ('test', myConcatenate('I', 'Love', 'This'))


// ----------------------------------------------------

// ARROW

// const myConcatenate = (firstStr,secondStr,thirdStr) => firstStr + secondStr + thirdStr

// console.log('test', myConcatenate('I','Got','This'))

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/
// DECLARATION
// function subtract(a,b) {
//  return a-b;

// }

//  console.log(subtract(100,50));

 // -----------------------------------------------------------------

// EXPRESSION

// const subtract = function subtract (a,b){
//     return (a-b)
// }

// console.log(subtract(1000,500))

// ----------------------------------------------------
// ARROW

// const subtract = (a,b) => a - b
// console.log(subtract(200,50))

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/

// DECLARATION
// function areaOfaCircle(radius){
//     let area = Math.PI * (radius * 2)
//     return area
// }    
// console.log(areaOfaCircle(5))

 // -----------------------------------------------------------------

// EXPRESSION

// const areaOfaCircle = function areaOfaCircle(radius){
//     let area = Math.PI * (radius * 2)
//     return (area)
// }
// console.log(areaOfaCircle(5))

// ----------------------------------------------------
// ARROW

// const areaOfaCircle = (radius) => Math.PI * (radius * 2)

// console.log(areaOfaCircle(5))

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

// DECLARATION
// function fahrenheitToCelsius(F) {
//     let fahrenheit = (F + 32) * .5556
//     return F + "°F is " + fahrenheit + "°C"
// }
// console.log(fahrenheitToCelsius(100))

 // -----------------------------------------------------------------

// EXPRESSION

//     const fahrenheitToCelsius = function fahrenheitToCelsius(F){
//     let fahrenheit = (F + 32) * .5556
//     return F + "°F is " + fahrenheit + "°C"
// }
// console.log(fahrenheitToCelsius(100))

// ----------------------------------------------------
// ARROW

// const fahrenheitToCelsius = (F) => {
//     let fahrenheit = (F + 32) * .5556 
//     return F + "°F is " + fahrenheit + "°C"
// }

// console.log(fahrenheitToCelsius(100));

// ******************

// Temperature Converter Celsius to Fahrenheit

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.

// Convert it to fahrenheit and output "NN°C is NN°F".
// ******************/

// DECLARATION
// function celsiusToFahrenheit(C) {
//     let Celsius = (C - 32) * .5556
//     return C + "°C is " + Celsius + "°F"
// }
// console.log(celsiusToFahrenheit(100))

 // -----------------------------------------------------------------

// EXPRESSION
 
// const celsiusToFahrenheit = function celsiusToFahrenheit(C){
//     let Celsius = (C - 32) * .5556
//     return C + "°C is " + Celsius + "°F"
// }
// console.log(celsiusToFahrenheit(100))
// ----------------------------------------------------
// ARROW

// const celsiusToFahrenheit = (C) => {
//     let celsius = (C - 32) * .5556
//     return C + "°C is " + celsius + "°F"
// }
// console.log(celsiusToFahrenheit(100))
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

// DECLARATION
// function absolute(A){
// return Math.abs(A)
// }
// console.log(absolute(-55))

 // -----------------------------------------------------------------

// EXPRESSION

// const absolute = function absolute(A){
//     return Math.abs(A)
// }
// console.log(absolute(-55))
// *****************
//  * 
//  ----------------------------------------------------
// ARROW
 
// const absolute = (A) => {
//     return Math.abs (A)
// }
// console.log(absolute(-66))

// Create a function that counts the number of characters in your name

// Character counter

// write a function that takes on argument
// make sure argument is string
// return the number of characters in the string
// call function 'countChars'
// ******************/

// DECLARATION
// function name(c){
//     return c.length
// }
// console.log(name("IvyDanielleKellyStrickland"))

//  -----------------------------------------------------------------

// EXPRESSION

// const name = function name(c){
//     return c.length
// }
// console.log(name("supercalifragilisticexpialidocious"))
// ----------------------------------------------------

// ARROW

// const name = (c) => {
//     return c.length
// }
// console.log(name("supercalifragilisticexpialidocious"))