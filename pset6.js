/*
    @func addTwoNumbers
    @param {number} a
    @param {number} b
    @returns {number}
    @desc - adds two numbers and returns the result
    
    @example addTwoNumbers(1,2) // 3
    @example addTwoNumbers(1) // 1
*/

const addTwoNumbers =(a,b=0)=>{
    let sum=(a+b);
    return sum;
}
console.log(addTwoNumbers(1,2))
console.log(addTwoNumbers(1)) 


/*
    @func turnNumberToString
    @param {number} a
    @returns {string}
    @desc - turns a number into string
    
    @example turnNumberToString(1); // "1"
    @example turnNumberToString("2"); // "2"
*/

const turnNumberToString=(a)=>{
    let string=`"${a}"`;
    return string;
}
console.log(turnNumberToString(1)); //"1"
console.log(turnNumberToString("2")); // "2"
/*
    @func fullName
    @param {string} firstName
    @param {string} lastName
    @returns {string}
    @desc - concatenates first and last name
    
    @example fullName('Taq', 'Karim'); // "Taq Karim"
    @example fullName('Foo'); // "Foo"
*/
const fullName=(firstName,lastName="")=>{
    return `"${firstName} ${lastName}"`;
   
}
console.log(fullName('Taq', 'Karim')); // "Taq Karim"
console.log (fullName('Foo')); // "Foo"


/*
    @func fullNameSentence
    @param {string} firstName
    @param {string} lastName
    @param {string} restOfSentence
    @desc - takes firstName, lastName and concatenates with
            restOfSentence
            USE THE `fullName` function to compute the firstName +
            lastName portion
            
    @example 
        // expect: "John Smith is awesome"
        fullNameSentence('John', 'Smith', 'is awesome');
*/
const fullNameSentence=(firstName,lastName,restOfSentence)=>{
    return `${firstName} ${lastName} ${restOfSentence}`
}
console.log(fullNameSentence("John","Smith","is awesome")) 
/*HELP
    @func fullNameSentenceWithChecks
    @param {string} firstName
    @param {string} lastName
    @param {string} restOfSentence
    @desc - takes firstName, lastName and concatenates with
            restOfSentence
            USE THE `fullName` function to compute the firstName +
            lastName portion
            IF `lastName` or `restOfSentence` are not defined
            return 'Required variables are not set!'
            
    @example 
        // expect: "John Smith is awesome"
        fullNameSentence('John', 'Smith', 'is awesome');
    @example
        // expect: 'Required variables are not set!'
        fullNameSentenceWithChecks('John', 'Smith');
*/



const fullNameSentenceWithChecks=(firstName,lastName,restOfSentence)=>{
    if (restOfSentence=== undefined ||lastName=== undefined){
        return "Required variable are not set!";
}
    let sentence=`${firstName} ${lastName} ${restOfSentence}`;
   return sentence;
}
console.log(fullNameSentenceWithChecks("John","Smith","is awesome"));
console.log(fullNameSentenceWithChecks("John","Smith"));

/*
    @func fToC
    @param {number} f
    @returns {number}
    @desc - converts farenheit to celsius
    
    @example fToC( 32 ); // 0 
    @example fToC( 212 ); // 100
    @example fToC(); // 0
    
*/

let fToC= (f)=>{
    let celsius= ((f-32)*(5/9));
    if (f===undefined){
        return 0;
}
    return celsius;
}
console.log(fToC( 32 )); // 0 
console.log(fToC( 212 )); // 100
console.log(fToC()); // 0
/*
    @func fToKelvin
    @param {number} f
    @returns {number}
    @desc - converts farenheit to kelvin
            conversion factor is this:
            k = c + 273.15
            USE THE `fToC` function you wrote to calculate
            the `c`, then plug that in to the equation above
            to calculate k
            
    @example fToC( 32 ); // 273.15
    @exmple fToC( 212 ); // 373.15
    @example fToC(); // 273.15
*/
const fToKelvin=(f=32)=>{
    let k = fToC(f)+ 273.15;
    return k;
}
console.log(fToKelvin( 32 )); // 273.15
console.log(fToKelvin( 212 )); // 373.15
console.log(fToKelvin()); // 273.15
/*
    @func fToKelvinWithChecks
    @param {number} f
    @returns {number}
    @desc - converts farenheit to kelvin
            conversion factor is this:
            k = c + 273.15
            USE THE `fToC` function you wrote to calculate
            the `c`, then plug that in to the equation above
            to calculate k
            IF `f` is not passed in, return "ERROR: variable 'f' is not set"
     //THIS IS WRONG       
    @example fToC( 32 ); // 273.15
    @exmple fToC( 212 ); // 373.15
    @example fToC(); // "ERROR: variable 'f' is not set"
*/

const fToKelvinWithChecks=(f)=>{
    let kelvin=fToC(f)+273.15;         //assigning the return of fToC to kelvin variable 
    if (f===undefined){
        return "ERROR: variable 'f' is not set"
    }
    return kelvin;
}
console.log(fToKelvinWithChecks( 32 )); // 273.15
console.log(fToKelvinWithChecks( 212 )); // 373.15
console.log(fToKelvinWithChecks()); // "ERROR: variable 'f' is not set"