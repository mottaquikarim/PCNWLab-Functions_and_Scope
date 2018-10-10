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
// GLOBAL
let x;
function getFullName(firstName, lastName, middleName){

    return `${firstName} ${middleName} ${lastName}`; ` `
}

getFullName("Robert", "Abreu", "Jose")





/*
    PROBLEM 2:
    Temperature Converter Fahrenheit to Celsius

    Create a function called fahrenheitToCelsius:
    
    Take a param that represents F. By default this should be 32
*/

function fahrenheitToCelsius(f) {
    if (typeof f !== "number"){
        return "Please enter a number";
   } else {
    let c = (f - 32) * 5/9;
    return `${f}°F is ${c} °C`;
   }
}

console.log(fahrenheitToCelsius(32));
/*
    PROBLEM 3:
    
    Calculate how old you will be in N years

    This function will tell you your age in N years
    
    takes in two args, ageNow and numYears
    should return a number that tells you how old you'll be in numYears
    ageNow and numYears should have default params
*/

function myAge(ageNow, numYear){
    return `In ${numYear} you will be ${ageNow += numYear}`;
}

console.log(myAge(29, 6));
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



function required(x){
    console.log( `PARAMETER ${x} NEEDED`);
    return 0;
}


function addTwoNums(a = required('a'), b = required('b')){

//function addTwoNums (a = '', b = '') {
    return a + b;
    return `Your first parameter was ${a} and your second was ${b}`;
}


 console.log()
/*
function addTwoNums (a = "a is not set", b = " b is not set"){
    return a + b;
}
*/
//console.log(addTwoNums(1));
//console.log(addTwoNums(1,2));
//console.log(addTwoNums('Robert'));
console.log(addTwoNums(1));
//console.log(addTwoNums());


/*
function sum (a = num1(), b =num2()) {
    return a + b;
}

function num1() {
    return `A not set`
}

function num2() {
    return `B not set`
}
//console.log(addTwoNums("pop", "bubbles"));


console.log (sum());

*/





