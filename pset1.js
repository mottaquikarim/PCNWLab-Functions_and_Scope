/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ){
      const futureAge = numYears + ageNow

        if (futureAge > 100){
            return NaN
        }
            else if(typeof ageNow !== "number" || typeof numYears !== "number" || numYears < 0 || ageNow < 0){
            return -1
       } 
            else{
            return futureAge
       }
        }
       
        console.log(typeof 44)
    
        console.log(myAge(-1, 92))



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
    const mySentence = firstStr + secondStr + thirdStr
    console.log(mySentence)
    return mySentence
    
    
}


console.log(myConcatenate('I ', 'am ', 'iron man ')); // 'I am iron man'

/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a,b) {
    const diff = a - b
    if(typeof a != "number" || typeof b != "number"){
        console.log("Input Numbers Only")
     } else {
         return diff
     }
    
}
console.log(subtract("why",200))
/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius){
    
    const A = 3.14 * radius**2
    return A
}    
console.log(areaOfaCircle(5))

/******************
Temperature Converter Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/
function fahrenheitToCelsius(fahr){

    const fToC = (fahr - 32) * 5/9 
    return fToC

}
console.log(fahrenheitToCelsius(32))
/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/
function CelsiusToFahrenheit(cels){

    const cToF = (cels * 5/9) + 32 
    return cToF

}
console.log(CelsiusToFahrenheit(32))

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

function isItTheWeekend (day){
   const dayOfWeek = day
if (dayOfWeek === "Saturday" || dayOfWeek ==="Sunday"){
    console.log("Yes, it's the Weekend ")
} else{
    console.log("No, it's the weekday")
}
    return 1
}
console.log(isItTheWeekend("Sunday"))
/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/
function absolute (num){
if(num >= 0){
    return num
} 
    else {
        
        return num * -1

}

}
console.log(absolute(10))




/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

function countChars(str){
if(typeof str !== "string"){
  
  console.log("Input letters")
  
  return "Input letters"
}

  else {
    
    return str.length
}
}

console.log(countChars("daniel"))