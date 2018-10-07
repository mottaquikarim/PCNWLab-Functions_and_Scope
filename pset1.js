/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
    console.log('ageNow value:', ageNow)
    console.log('numYears value:', numYears)

    const ageLater = ageNow + numYears;

    return ageLater;
}

console.log(myAge(28, 32)); // 60



/******************
Concatenate Strings

Concatenating string variables

- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thridStr
- Concatenate all three arguments in a variable called mySentence
- Call myConcatenate function
******************/

function myConcatenate( firstStr, secondStr, thirdStr ) {
    //let mySentence = firstStr + " " + secondStr + " " + thirdStr;
    let mySentence = `${firstStr} ${secondStr} ${thirdStr}`;
    return mySentence;
}

console.log('the params are... I, am, iron man');
console.log(myConcatenate('I', 'am', 'iron man')); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    console.log('a is...', a)
    console.log('b is...', b)

    return (a-b);
}

console.log(subtract(2,3));

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    console.log('radius is...', radius); 

    //const area = Math.PI * radius ** 2;
    //const area = Math.PI * Math.pow(radius, 2);
    const area = Math.PI * radius * radius;
    return area;
}    

console.log(areaOfaCircle(1), 3.14159)
/*
    radius is... 1
    0
*/
console.log(areaOfaCircle(), NaN)
/*
    radius is... undefined
    0
*/
console.log(areaOfaCircle(1,2,3,4,5), 3.14159)
/*
    radius is... 1
    0
*/
console.log(areaOfaCircle(2), 3.14159 * 4)


/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

function fahrenheitToCelsius(f) {
    console.log('f param is...', f)    
    const c = (f - 32) / 1.8;
    return c;
}

console.log(fahrenheitToCelsius(212), 100);
console.log(fahrenheitToCelsius(32), 0);




/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function celsiusToFahrenheit(c) {
    console.log('c param is...', c)
    const f = c * 1.8 + 32;
    return f;
}

console.log('-------------------------------')
console.log(celsiusToFahrenheit(100), 212)
console.log(celsiusToFahrenheit(0), 32)
console.log('-------------------------------')

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
    console.log('number param is...', number);

    let abs = Math.abs(number);
    return abs;
}

console.log('absolute-------------------------------')
console.log(absolute(-2), 2)
console.log(absolute(2), 2)
console.log('absolute-------------------------------')


/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/
function countChars(str) {
    console.log('str param is...', str)
    return str.length;
}

console.log('countChars-------------------------------')
console.log(countChars('test'), 4)
console.log('countChars-------------------------------')

