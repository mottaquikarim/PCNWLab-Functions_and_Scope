/*
    @func addTwoNumbers
    @param {number} a
    @param {number} b
    @returns {number}
    @desc - adds two numbers and returns the result
    
    @example addTwoNumbers(1,2) // 3
    @example addTwoNumbers(1) // 1
*/

function addTwoNums(numOne, numTwo){
    
    if (typeof numOne === "number" && typeof numTwo === "number"){
            return numOne + numTwo
        }
    else if (typeof numOne !== "undefined" && typeof numTwo === "undefined") {
        return "Missing second number"
    }
    else if (typeof numOne === "undefined"){
        return "Missing both numbers"
    }
    else {
        return "Invalid inputs, please enter two numbers."
    }
}

console.log(addTwoNums(1,2))
console.log(addTwoNums(1))
console.log(addTwoNums())
console.log(addTwoNums("lulz","lmao"))

/*
    @func turnNumberToString
    @param {number} a
    @returns {string}
    @desc - turns a number into string
    
    @example turnNumberToString(1); // "1"
    @example turnNumberToString("2"); // "2"
*/

function turnNumberToString (number){
    const string = `${number}`
    return string
}

console.log(turnNumberToString(1))
console.log(turnNumberToString("2"))

/*
    @func fullName
    @param {string} firstName
    @param {string} lastName
    @returns {string}
    @desc - concatenates first and last name
    
    @example fullName('Taq', 'Karim'); // "Taq Karim"
    @example fullName('Foo'); // "Foo"
*/

function fullName (firstName, lastName = ""){
    const yourFullName = firstName
    if (typeof firstName === "undefined"){
        return "Input Error"
    }
    else if (typeof firstName !== "undefined" && lastName === "") {
        return yourFullName
    }
    else {
        yourFullName = `${firstName} ${lastName}`
        return yourFullName
    }
}

console.log(fullName("Karan", "Taneja"))
console.log(fullName("TK"))
console.log(fullName())

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

function fullNameSentence(firstName, lastName ="", restOfSentence = ""){
    const fullSentence = `${fullName(firstName, lastName)} ${restOfSentence}`
    return fullSentence
    
}

console.log(fullNameSentence("Karan", "Taneja", "is awesome"))
console.log(fullNameSentence("Karan","Taneja"))
console.log(fullNameSentence("TK", "is awesome"))

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

function fullNameSentenceWithChecks(firstName, lastName = "", restOfSentence = ""){
    
    const fullSentence = `${fullName(firstName, lastName)} ${restOfSentence}`
    
    if (lastName === "" || restOfSentence === ""){
        return "Required variables are not set!"
    }
    else {
        return fullSentence
    }
}

console.log(fullNameSentenceWithChecks("Karan", "Taneja", "is awesome"))
console.log(fullNameSentenceWithChecks("Karan","Taneja"))
console.log(fullNameSentenceWithChecks("TK", "is awesome"))

/*
    @func fToC
    @param {number} f
    @returns {number}
    @desc - converts farenheit to celsius
    
    @example fToC( 32 ); // 0 
    @example fToC( 212 ); // 100
    @example fToC(); // 0
    
*/
    function farenToCel (farenheit){
        const tempCelcius = (farenheit - 32) * (5/9)
        return tempCelcius;
    }

    console.log(farenToCel(86))
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

function farenToKelvin (farenheit){
    const tempKelvin = farenToCel(farenheit) + 273.15
    return tempKelvin
}

console.log(farenToKelvin(32))

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

function farenToKelvinWithCheck (farenheit){
    if (typeof farenheit === "undefined"){
        return "ERROR: Farenheit variable is not set!"
    }
    else if (typeof farenheit !== "undefined" && typeof farenheit !== "number"){
        return "ERROR: Invalid entry, please enter a numerical value for farenheit"
    }
    else {
        const tempKelvin = farenToCel(farenheit) + 273.15
        return tempKelvin
    }
}

console.log(farenToKelvinWithCheck(32))
console.log(farenToKelvinWithCheck("lulz"))
console.log(farenToKelvinWithCheck())