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

// Function Declaration:
function remOfSum(a, b, c) {
    return ((a+b+c) % 3);
}
console.log(remOfSum(1, 2, 3));

// Function Expression:
const sum = function(a, b, c) {
    return ((a + b + c) % 3);
}
console.log(sum(1,2,3));

// Fat Arrow Expression:
const remainderOfSum = (a, b, c) => {
    return ((a + b + c) %3);
}
console.log(remainderOfSum(1, 2, 3))

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

// Function Declaration:
function takesThreeParams(a, b ,c) {
    return `${a}-${b}-${c}`;
}

console.log(takesThreeParams('one', 'two', 'three'))

// Function Expression:
const takesThreeParams2 = function(a, b, c) {
    return `${a}-${b}-${c}`;
}

console.log(takesThreeParams2('one', 'two', 'three'))

// Fat Arrow Expression:
const takesThreeParams3 = (a, b , c) => {
    return `${a}-${b}-${c}`;
}

console.log(takesThreeParams3('one', 'two', 'three'))

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
// Function Declaration:


// Function Expression:


// Fat Arrow Expression:

