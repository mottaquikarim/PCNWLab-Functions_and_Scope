/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
    let newAge = ageNow + numYears;
    return newAge;
       
}
let myAgeNYears = myAge(22,30);
console.log(myAgeNYears);


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
    let mySentence = firstStr+" "+ secondStr+" "+ thirdStr;
    return mySentence;
}

console.log(myConcatenate('I', 'am', 'iron man')); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    if (typeof a == 'number' && typeof b == 'number') {
        let substraction = a-b;
        return substraction; }
        else {
            return -1;
        }
    }
    

console.log(subtract(10,3));

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius)  {
    let areaofmycircle = Math.PI * radius**2;
    return areaofmycircle;
    }
    console.log(areaOfaCircle(2));

    

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/
function fahrenheitToCelsius(a) { 
    let conversion = (a - 32)* 5/9;
    console.log(a+"°F is "+conversion+"°C");
    return conversion
}
fahrenheitToCelsius(72);


/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(a) {  
    let conversion2 = (a * 9/5)+ 32 ;
    console.log(a+"°C is "+conversion2+"°F");
    return conversion2 ;
}
celsiusToFahrenheit(22.2);

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
function absolute(b) { 
    let absoluteval = Math.abs(b);
    return absoluteval;
}
console.log(absolute(-2));

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/
function charcount(a) { 
    if (typeof(a) == 'string') { 
     let charactercount = a.length;
    return charactercount;
    }
    else 
    return -1;
}
console.log(`My name has ${charcount("Jorge")} characters`);


