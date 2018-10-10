/*
    FOR EACH PROBLEM BELOW, IMPLEMENT THREE WAYS
    1. AS A FUNCTION DECLARATION
    2. AS AN ANONYMOUS FUNCTION EXPRESSION
    3. AS A NAMED FUNCTION EXPRESSION
    
    RUN BOTH TO ENSURE THEY WORK PROPERLY
*/


/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 
// Function declaration 
function remainderOf(a,b,c) { 
let sum = a+b+c;
return sum % 3;
}
console.log(remainderOf(6,5,6));
// Function expression
const myRemainderOf = function(a,b,c) {
    let sum = a+b+c;
    return sum % 3;

}
console.log(myRemainderOf(6,5,6));
// Fat arrow declaration
const theRemainderof = (a,b,c) => { 
    let sum = a+b+c;
    return sum % 3;
}
console.log(theRemainderof(6,5,6));
/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
// Function declaration
function theNewString(a, b, c) { 
    let newstring = a+'-'+b+'-'+c;
    return newstring;
}
console.log(theNewString('1','2','3'));
// Function expression
const myNewString = function(a, b, c) {
    let newstring = a+'-'+b+'-'+c;
    return newstring;
}
console.log(myNewString('1','2','3'));
// Fat Arrow expression 
const newStringDawg = (a, b, c) => {
    let newstring = a+'-'+b+'-'+c;
    return newstring;
}
console.log(newStringDawg('1','2','3'));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
// Function declaration 
function generateNumber() {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(generateNumber());
// Function expression
const makeNumber = function() {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(makeNumber());
// Fat arrow expression
const myPhatNumber = () => {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(myPhatNumber());

