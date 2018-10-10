/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears )  {
    console.log( 'ageNow value:', ageNow)
    console.log ('numYears value:', numYears)

    const ageLater = ageNow + numYears;

    return ageLater;
  
}
console.log (myAge (26, 100)); //50




/******************
Concatenate Strings

Concatenating string variables

- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thirdStr
- Concatenate all three arguments in a variable called mySentence
    * console out mySentence variable
- Call myConcatenate function
******************/

function myConcatenate( firstStr, secondStr, thirdStr ) {
   
    const mySentence =firstStr + secondStr + thirdStr;
    return mySentence;

}

console.log (myConcatenate('I ', 'am ', 'iron man')); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
   if (typeof b === "undefined") return -a;
   else return a - b;
}
console.log (subtract(10,2));

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    console.log( 'radius is...', radius);
    //const area = Math.PI * radius ** 2;
    return 0;

    
}    

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/
function fahrenheitToCelsius(fah){
    let Celsius =(fah - 32) * 5/9 

    return Celsius;
}
console.log (fahrenheitToCelsius(10));

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(cel){
    let fahrenheit =(cel * 9/5) + 32

    return fahrenheit;
}
console.log (celsiusToFahrenheit(10));
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
function absolute(number) {
   let abs= Math.abs(number);
    return 1;
}
console.log (absolute(-1),(1))

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/
function countChars(str) {
    console.log ('str param is...', str)
    return str.length;
}

console.log (countChars('test'),4)


const foo = 1;
function run() {
    // const foo = 2;
    console.log(foo)
}

run();
console.log(foo); // what is foo? why?

let foo = 1;
function run() {
    foo = 2;
}

console.log(foo); // what is foo? why?
run();
console.log(foo); // what is foo? why?


const foo = 1;
function run() {
    const foo = 2;
    console.log(foo); // what is foo? why?
}

console.log(foo); // what is foo? why?
run();
console.log(foo); // what is foo? why?

const foo = 1;
function run() {
    const foo = 2;
    function _inner() {
        console.log(foo); // what is foo? why?
    }
    _inner();
}

run();
console.log(foo); // what is foo? why?


let foo = 1;
function run() {
    foo = 2;
    function _inner() {
        console.log(foo); // what is foo? why?
    }
    _inner();
}

run();
console.log(foo); // what is foo? why?
*/

const foo = 1;
function run() {
    const foo = 2;
    function _inner() {
        const foo = 3;
        console.log(foo); // what is foo? why?
    }
    _inner();
}

run();
console.log(foo); // what is foo? why?


