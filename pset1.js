/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {

       if (ageNow + numYears > 100){
            console.log("NaN")
            return "NaN"
       }
       else if (typeof ageNow !== "number" || typeof numYears !== "number"){
            console.log(-1)
            return -1
       }
       else {
           const ageLater = ageNow + numYears
           console.log("You will be " + (ageNow + numYears) + " years old in " + numYears + " years." )
           return ageLater
       }
}

myAge(25, 10); // '35'
myAge(25, 76); // NaN
myAge(25, "two"); // -1

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
    const mySentence = firstStr + " " + secondStr + " " + thirdStr
    console.log(mySentence)
    return mySentence
}

myConcatenate('I', 'am', 'iron man'); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {

if(typeof a !== "number" && typeof b !== "number"){
    console.log("What are you doing with your life?")
    return "What are you doing with your life?"
    }
        
else if(typeof a !== "number"){
    console.log("Invalid input for argument a")
    return "Invalid input for argument a"
    }

else if(typeof b !== "number"){
    console.log("Invalid input for argument b")
    return "Invalid input for argument b"
    }

else {
    const myDifference = a -b
    console.log(myDifference);
    return myDifference
    }

}

subtract(100, 25); // 75
subtract("One-Hundred", 25); //Invalid input for argument a
subtract(123, "two"); // Invalid input for argument b
subtract("Duh", "Duh"); // What are you doing with your life?

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    const circleArea = ((radius ** 2) * Math.PI)
    console.log("The area of a circle with a radius of " + radius + " is " + circleArea) 
    return circleArea
}    

areaOfaCircle(25); 

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

function fahrenheitToCelsius(fahrenheit){
    const tempCelcius = (fahrenheit - 32) * (5/9);
    console.log(fahrenheit + "°F is " + tempCelcius + "°C")
    return tempCelcius
}

fahrenheitToCelsius(86); // 30 degrees celcius

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/

function celciusToFahrenheit(celcius){
    const tempFahrenheit = ((celcius / (5/9)) + 32);
    console.log(celcius + "°C is " + tempFahrenheit + "°F")
    return tempFahrenheit
}

celciusToFahrenheit(30); // 86 degrees fahrenheit

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

function isItTheWeekend(today){

    today = today.toLowerCase();

    if(today == "saturday" || today == "sunday"){
        console.log("Yes, it the weekend")
        return "Yes, it is the weekend"
    }
    else if (today == "monday" || today == "tuesday" || today == "wednesday" || today == "thursday"){
        today = today.charAt(0).toUpperCase() + today.slice(1);
        console.log("No, " + today + " is a weekday")
        return "No, " + today + " is a weekday"
    }
    else if (today == "friday"){
        today = today.charAt(0).toUpperCase() + today.slice(1);
        console.log("No, but it's " + today + "! Gotta get down on " + today + "!")
        return "No, but it's " + today + "! Gotta get down on " + today + "!"
    }
    else{
        today = today.charAt(0).toUpperCase() + today.slice(1);
        console.log("Yeeeahhh, pretty sure '" + today + "' is not a day. Try again.")
        return "Yeeeahhh, pretty sure '" + today + "' is not a day. Try again."
    }
}

isItTheWeekend("Saturday");
isItTheWeekend("Monday");
isItTheWeekend("Friday");
isItTheWeekend("Lulzday");

/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/

function absolute(number){
    if(number < 0){
        absVal = (number * (-1))
        console.log("The absolute value of " + number + " is " + (number * (-1)))
        return absVal
    }
    else if(typeof number !== "number"){
        console.log("Invald input.")
        return "Invalid input."
    }
    else{
        console.log("The absolute value of " + number + " is " + number)
        return number
    }
}

absolute(-1);
absolute(1);
absolute("wut")

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

function countChars(string){
    if(typeof string !== "string"){
        console.log("Invalid input.")
        return "Invalid input."
    }
    else{
        console.log(string + " is made up of " + string.length + " characters.")
        return string.length
    }
}

countChars("Lul");
countChars(1);

