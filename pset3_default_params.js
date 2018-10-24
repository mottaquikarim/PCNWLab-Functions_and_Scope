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

function getFullName(firstName, lastName, middleName = ""){
    return `${firstName} ${middleName} ${lastName}`
}

/*

console.log(getFullName("Karan", "Taneja"))
console.log(getFullName("Karan","Taneja","'I swear I know what I'm doing guys'"))

*/

/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/

function fahrenheitToCelsius(fahrenheit = 32){
    const tempCelcius = (fahrenheit - 32) * (5/9);
    return `${fahrenheit}°F is ${tempCelcius}°C`
}


// console.log(fahrenheitToCelsius(86))

/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/

function myAge( ageNow = 0, numYears = 5 ) {

    if (typeof ageNow !== "number" || typeof numYears !== "number"){
         return "Get your life together"
    }
    else {
        let ageLater = `You are ${ageNow} and will be ${ageNow + numYears} years old in ${numYears} years.`
        return ageLater
    }
}

// console.log(myAge(25,10))
// console.log(myAge())

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
function displayError(paramName){
    throw `${paramName} isn't set!`
}

function addTwoNums(firstNumber = displayError(firstNumber), secondNumber = displayError(secondNumber)){
    return firstNumber + secondNumber
}

console.log(`---------------
Start of 25+12
---------------`)

console.log(addTwoNums(25,12))

console.log(`---------------
Start of 12
---------------`)

console.log(addTwoNums(12))

console.log(`---------------
Start of Blank
---------------`)

console.log(addTwoNums())