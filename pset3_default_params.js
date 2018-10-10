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

console.log(getFullName("Hello", "World"))

/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/

function fahrenheitToCelsius(F = 32){
    
    return (F - 32) * 5/9
}

console.log(fahrenheitToCelsius())

/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/

function age(numYears, ageNow = 23){
    
    return ageNow + numYears
}

console.log(age(5))
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

// function missingParameter(paramName) {
//  throw new Error (`${paramName} is not set`)
// }

// function addTwoNums(a = missingParameter("a"), b = missingParameter("b")){

//     return a +b
// }

// console.log(addTwoNums(1, 2))