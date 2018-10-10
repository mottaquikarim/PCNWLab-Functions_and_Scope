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
function getFullName(firstName = "", lastName = "",middleName = "N/A") {
    let fullName = firstName + middleName + lastName;
    let result = `Your firstname is ${firstName},  Middle Name is ${middleName} , your last name is ${lastName}`;
    return result;

}
console.log (getFullName("Jorge","Billini"));

/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/
function fahrenheitToCelsius(F = 32) {
    C = (F - 32) * 5/9;
    console.log(C);
    return C;

}
fahrenheitToCelsius(100)


/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/
function newAge(ageNow = 0, numYears = 0) {
    return ageNow + numYears;
}
console.log(newAge(22));
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
function parameterA(paramName) {
    throw new Error(`youre missing ${paramName} fam`);
    return 0;

}
function addSomeNumbers( a =  parameterA('a'), b = parameterA('b')) {
    return a+b;
}
console.log(addSomeNumbers());









