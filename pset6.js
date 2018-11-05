/*
    @func addTwoNumbers
    @param {number} a
    @param {number} b
    @returns {number}
    @desc - adds two numbers and returns the result
    
    @example addTwoNumbers(1,2) // 3
    @example addTwoNumbers(1) // 1
*/
const addTwoNumbers = (a=0,b=0) =>{
    return a+b;
}
console.log(addTwoNumbers(1,2));
console.log(addTwoNumbers(1));

/*
    @func turnNumberToString
    @param {number} a
    @returns {string}
    @desc - turns a number into string
    
    @example turnNumberToString(1); // "1"
    @example turnNumberToString("2"); // "2"
*/
const turnNumberToString = (a) => {
    if(typeof a === 'number'){
        return `${a}`;
    }
    else if(typeof a === 'string'){
        return a;
    }
    throw new Error('please insert a number');
}
console.log(turnNumberToString(1));
console.log(turnNumberToString("2"));

/*
    @func fullName
    @param {string} firstName
    @param {string} lastName
    @returns {string}
    @desc - concatenates first and last name
    
    @example fullName('Taq', 'Karim'); // "Taq Karim"
    @example fullName('Foo'); // "Foo"
*/
const fullName = (firstName, lastName) => {
    if (typeof firstName === 'string' && typeof lastName === 'undefined') {
        return firstName;
    }
    else if (typeof firstName === 'string' && typeof lastName === 'string'){
       return firstName.concat(' ', lastName);
    }
    throw new Error('please insert a firstName and lastName, as strings')
}
console.log(fullName('Taq', 'Karim'));
console.log(fullName('Foo'));
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
const fullNameSentence = (firstName, lastName, restOfSentence) => {
    return fullName(firstName,lastName).concat(' ', restOfSentence);
}
console.log(fullNameSentence('John', 'Smith', 'is awesome'));
/*
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
const isRequired = () => { 
    throw new Error('param is required'); 
}

const fullNameSentenceWithChecks = (firstName, lastName = isRequired(), restOfSentence = isRequired()) => { 
    return fullName(firstName, lastName).concat(' ', restOfSentence );
}

 

console.log(fullNameSentence('John', 'Smith', 'is awesome'));
/*
    @func fToC
    @param {number} f
    @returns {number}
    @desc - converts farenheit to celsius
    
    @example fToC( 32 ); // 0 
    @example fToC( 212 ); // 100
    @example fToC(); // 0
    
*/
const fToC = (number) => {
    if (number === undefined) {
        return 0;
    }
    let celsius = (number - 32) * 5/9;
    return celsius;
}
console.log(fToC( 32 ));
console.log(fToC( 212 ));
console.log(fToC());

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

const fToKelvin = (number) => {
let kelvin = number + 273.15;
return kelvin;
}
console.log('---',fToKelvin(fToC( 32 )));
console.log('---',fToKelvin(fToC( 212 )));
console.log('---',fToKelvin(fToC()));



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
            
    @example fToC( 32 ); // 273.15
    @exmple fToC( 212 ); // 373.15
    @example fToC(); // "ERROR: variable 'f' is not set"
*/

const fToKelvinWithChecks = (number) => {
    if (typeof number === 'undefined'){
        throw new Error("ERROR: variable 'f' is not set");
    }
    return fToKelvin(fToC(number));
}
console.log(fToKelvinWithChecks(32));
console.log(fToKelvinWithChecks(212));
console.log(fToKelvinWithChecks());

