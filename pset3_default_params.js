/*
    THE PURPOSE OF THESE PROBLEMS ARE TO FAMILIARIZE YOURSELF WITH
    JS DEFAULT PARAMATER FEATUER OF FUNCTIONS
*/

/*
    PROBLEM 1:
    Create a function called getFullName that takes three arguments
    (one for firstName, one for middleName, one for lastName)
    
    use a default parameter for the middleName, set it to ""
*/
function getFullName(lastName, firstName, middleName = "") {
let getFullName = `${lastName}, ${firstName} ${middleName}`;
return getFullName;
}
console.log(getFullName("Igwe", "Osita"));

/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/

function fahrenheitToCelsius(F = 32){
    const C = ((F-32) * (5/9));
    const fahrenheitToCelsius = `${F}°F is ${C}°C.`;
    return fahrenheitToCelsius;
}
console.log(fahrenheitToCelsius(70));
/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/
function myAge(ageNow = 26, numYears = 32) {
    const futureAge =  `In ${numYears} years, I will be ${numYears+ageNow}.`;
  
    return futureAge;
  }
  const futureAge1 = myAge();
  console.log(futureAge1);
/*
    PROBLEM 4:
    Now, let's do something interesint.
    
    Without having to use for loops or if statements,
    can you think of how you can use the default params feature to set
    "required" params of a function?
    
    for ex:, suppose you had a function called addTwoNums(a,b)
    
    use default params in such a way that if the user did something like:
    addTwoNums(1); 
    it would console.log('b is not set!')
    
    if the user did something like:
    addTwoNums();
    it would:
        console.log('a is not set!')
        console.log('b is not set!')
        
    if you are adventerous, have it throw an actual custom javascript error
    (red text in console)
    
*/


  function missingParameter(paramName) {
      console.log(`you are missing parameter ${paramName}`);
      return 0; 
  }
function addTwoNums (a= missingParameter('a'), b= missingParameter('b')) {
return a+b;
}

console.log(addTwoNums());

/* addtwonums runs - it figures out if there is are parameters for both imputs, if there are any missing inputs
then it invokes the missing parameter function - the missingparam functions prints the message and returns 0 so that the addvalue function
can return a number */

/*function missingParameter(paramName) {
      throw new Error(`you are missing ${paramName}.`);
  }
function addTwoNums (a= missingParameter('a'), b= missingParameter('b')) {
return a+b;
}

console.log(addTwoNums());

*/
const subtract = function(a, b){
    return a - b;
} // this is called a function expression\
console.log(subtract()); //

const hello = 5;
hello(3); // this does not work because hello is a number (5) - can't invoke a number
subtract(5); //this can be invoked because subtract is a function - can invoke a function

 
function countChars(nameString = "Jane Doe") {
    return nameString.length
}
console.log(countChars());