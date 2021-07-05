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
function getFullName(f_name, l_name, m_name = "")
{
    return f_name + " " + m_name + " " + l_name;
}
console.log(getFullName("Oliver", "apple"));//Outputs Oliver, "", "undefined". Last name has no default and was not entered.
console.log("");//New line for organ ization.

/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/
function fahrenheitToCelsius(number=32){
    let celsius;
    celsius = (number - 32) *  5 / 9;
    return celsius;
}
console.log("Fahrenheit to Celsius: 32F is " + fahrenheitToCelsius() + "C");//F to C. 0F is 32C
console.log("");//New line for organ ization.
/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/
function myAgeIn(num,years=0){
    return num + years;
}
console.log("My age in 0 years will be " + myAgeIn(23));//Outputs 23 because that is my current age.
console.log("");//New line for organ ization.
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
function addTwoNums(a='\x1b[31m' + "a is not set.\n" + '\x1b[0m',b='\x1b[31m' + "\nb is not set." + '\x1b[0m'){
    return a+b;
}
console.log("A + B = \n" + addTwoNums(2,3));//2 + 3 = 5.
console.log("A + B = \n" + addTwoNums(3));//3 and B not set.
console.log("A + B = \n" + addTwoNums());//A and B not set.

