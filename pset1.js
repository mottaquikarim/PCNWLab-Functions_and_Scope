/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
       let num;
       if (typeof ageNow != 'number' || typeof numYears != 'number'){
            return -1;
       }
       else{
        num = ageNow + numYears;
            if(num > 100){
                return "NaN";
                }
       else{
           return num;
       }
       }
}
console.log("My age in 5 years: " + myAge(23,5)); //Correct input values
console.log("My age in 100 years: " + myAge(23,90)); //Incorrect input values (Over 100yrs old)
console.log("My age in 'f' years: " + myAge(23,'f')); //Incorrect input value
console.log("");//New line for organization.

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
    return firstStr + ' ' + secondStr + ' ' + thirdStr;
}
let mySentence = myConcatenate('I','am','iron man');
console.log("mySentence: " + mySentence); //concatenated arguement as variable mySentence
console.log("myConcatenate: " + myConcatenate("He","is","iron man")); //myConcatenate function called
console.log("");//New line for organization.

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    if(typeof a != 'number' || typeof b != 'number'){
        return "Not a number"
    }
    else{
        let num;
    num = a - b;
    return num; 
    }
   
}
console.log("Subtraction 'ap' and 5: " + subtract("ap",5)); //Invalid input, not a number.
console.log("Subtraction 123 and 23: " + subtract(123,23)); //Correct input, returns 100.
console.log("");//New line for organization.

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    let areaCircle;
    areaCircle = 3.14159 * (radius ** 2);
    return areaCircle;
}    
console.log("Area of a Circle with a radius of 5: " + areaOfaCircle(5)); //Radius function
console.log("");//New line for organization.

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/
function fahrenheitToCelsius(number){
    let celsius;
    celsius = (number - 32) *  5 / 9;
    return celsius;
}
console.log("Fahrenheit to Celsius: 50F is " + fahrenheitToCelsius(50) + "C");//F to C.
console.log("");//New line for organ ization.

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(num){
    let fahrenheit = (num * 9 / 5) + 32;
    return fahrenheit;
}
console.log("Celsius to Fahrenheit: 20C is " + celsiusToFahrenheit(20) + "F") //C to F.
console.log("");//New line for organization.

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
function isItTheWeekend(){
    var theDay = new Date();
    var today = theDay.getDay();
    // var today = ;
    if(today == 0 || today == 7){
        return "Yes, it's the weekend.";
    }
    else{
        return "No, it's the weekday.";
    }
}
console.log("Is it the weekend?: " + isItTheWeekend());//Check's today's date using date function in java script. 0 = Sunday, 1 = Monday, and so on to 7 = Saturday.
console.log("");//New line for organization.

/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/
function absolute(num){
    let abNum;
    if(num >= 0){
        return num;
    }
    else {
        abNum = -1 * num;
    }
    return abNum;
}
console.log("Absolute of '10' is: " + absolute(10));//Absolute value of 10 is 10.
console.log("Absolute of '-50' is: " + absolute(-50));//Absolute value of -50 is 50.
console.log("");//New line for organization.

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/
function countChars(letters){
    let test = typeof letters;
    if(test != 'string'){
        return "Error. Not a string.";
    }
    else{
        let temp = letters;
        let num = temp.length;
        return num;
    }
}
console.log("Char counter of '50' is: " + countChars(50));//Input value is not a string so invalid.
console.log("Char counter of 'apple' is: " + countChars("apple"));//Input value amount of char is 5.
