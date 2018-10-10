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
function remainderOf(a,b,c) { 
let sum = a+b+c;
return sum % 3;
}
console.log(remainderOf(6,5,6));

const myRemainderOf = function(a,b,c) {
    let sum = a+b+c;
    return sum % 3;

}
console.log(myRemainderOf(6,5,6));

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
function theNewString(a, b, c) { 
    let newstring = a+'-'+b+'-'+c;
    return newstring;
}
console.log(theNewString('1','2','3'));

const myNewString = function(a, b, c) {
    let newstring = a+'-'+b+'-'+c;
    return newstring;
}
console.log(myNewString('1','2','3'));

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
function generateNumber() {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(generateNumber());

const makeNumber = function() {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(makeNumber());

const myPhatNumber = () => {
    let randomnum = Math.floor(Math.random()* 10);
    return randomnum;
}
console.log(myPhatNumber());
