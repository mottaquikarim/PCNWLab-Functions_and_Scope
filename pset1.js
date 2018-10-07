/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
    
       if (typeof ageNow !== "number"|| typeof numYears !== "number"){
            return -1;
       } else if (ageNow + numYears > 100) {
           return NaN;
       } 

       return `In ${numYears} years, you will be ${ageNow + numYears} years old.`;
}


console.log(myAge(69, 6));





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

function myConcatenate( firstStr, secondStr, thirdStr ) {
    return `${firstStr} ${secondStr} ${thirdStr}`
}

console.log(myConcatenate('I', 'am', 'iron man')); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    if (typeof a !== "number"|| typeof b !== "number"){
        return "Please enter numbers";
   } else {
       return a -= b;
   }
}
console.log(subtract(10, 5));
/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    if (typeof radius !== "number"){
        return "Please enter a number";
   } else {
    return radius = 3.14159 * (radius*2);
   }  
}   

console.log(areaOfaCircle(5));

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

function fahrenheitToCelsius(f) {
    if (typeof f !== "number"){
        return "Please enter a number";
   } else {
    let c = (f - 32) * 5/9;
    return `${f}°F is ${c} °C`;
   }
}

console.log(fahrenheitToCelsius(32));

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(c){
    if (typeof c !== "number"){
        return "Please enter a number";
   } else {
    let f = (c * 9/5) + 32;
    return `${c}°C is ${f} °F`;
   }
   
   console.log(celsiusToFahrenheit(0));
}


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

function isItTheWeekend(day){
    day = day.toLowerCase();
 if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday" ) {
        return `No, it's the weekday`;
 }else if (day == "saturday" || day == "sunday") {
        return `Yes, it's the weekday`;
 } else {
     return `Invalid input entered`;
 }
}

console.log(isItTheWeekend("Monday"));
console.log(isItTheWeekend("SunDaY"));
/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/

function absolute(num){
    if (typeof num !== "number"){
        return `Not a number`;
} else if (num >= 0){
    return `${num} is an absolute number`;
} else {
    return `Absolute version of ${num} is ${Math.abs(num)}`;
 }
}

console.log(absolute(-5));
/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/


