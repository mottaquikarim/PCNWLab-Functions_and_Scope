/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/
// function declaration 
function myAge( ageNow, numYears ) {
    
 const ageLater = ageNow + numYears;
    return ageLater; 
}
const MyAge1 = myAge(30, 2018)
console.log(MyAge1);

// function expression 

const myAge2 = (ageNow2, numYears2) =>  numYears2 + ageNow2; 
console.log(myAge2(30,2018)); 


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
//function declaration 
function myConcatenate( firstStr, secondStr, thirdStr ) {
    
    // let mySentence = firstStr + ' ' + secondStr + ' ' + thirdStr; 
     let mySentence = `${firstStr} ${secondStr} ${thirdStr}`
    return mySentence; 

}
console.log(myConcatenate('I', 'am', 'Mielyn ')); // 'I am iron man'

// function expression 

const myConcatenate2 = (firstStr1, secondStr1, thirdStr1) => firstStr1 + " " + secondStr1 + " " + thirdStr1;
console.log(myConcatenate2('I', 'am', 'ironman'));

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/
// function declaration 
function subtract(a,b) {
    
    return a - b; 
    
}
console.log(subtract(5,3));

//function expression 

const subtract2 = (a,b) => a - b; 
console.log(subtract(15,10));

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/

// function declaration 
function areaOfaCircle(radius){
    
    return 2 ** Math.PI * radius; 
    

}    
console.log(areaOfaCircle(1));
// function expression 

const areaOfaCircle2 = radius => 2 ** Math.PI * radius;
console.log(areaOfaCircle2(1)); 

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

// function declaration 
function fahrenheitToCelsius(fahrenheit){
    
     return fahrenheit = (9 / 5) - 32; 
    

}    
console.log(fahrenheitToCelsius(1));

// function expression 
const fahrenheitToCelsius2 = fahrenheit2 => (9 / 5) - 32;
console.log(fahrenheitToCelsius2());

/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
//function declaration 
function celsiusToFahrenheit(celsius){

    let cTemperature = 9 / 5 + 32
    return cTemperature;

}
console.log(celsiusToFahrenheit(1));

//function expression 

const celsiusToFahrenheit2 = celsius2 => (9 / 5) + 32;
console.log(celsiusToFahrenheit2());

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
     let weekend = ['Saturday', 'Sunday']; 

     if(weekend === 'Saturday' || weekend === 'Sunday'){
         console.log("Yes, Its a weekend");
     }else {
         console.log("No,Its  the weekday");
     }
     
     return weekend; 
 }

console.log(isItTheWeekend("Saturday"));

*/ 
/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/
//function declaration 

function absolute(){
  Math.abs(10);
  return 10; 

}
console.log(absolute(1));

//function expression 
const absolute2 = n => Math.abs(n); 
console.log(absolute2(10));

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

/* function countChars(){
        
       let myName = 15 ; 

       return myName ;


}
console.log(myName.toString()); */