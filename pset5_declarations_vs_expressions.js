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

function remainderOfSum (a,b,c) {
    return (a+b+c)%3; 
}

const remainderOfSum2 = function(a,b,c) {
    return (a+b+c)%3;
}

const remainderOfSum3 = (a,b,c) => {
    return (a+b+c)%3;
}

console.log(remainderOfSum3(3,4,7));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function returnWithDash(a,b,c) {
    return a + "-" + b + "-" + c;
}

const returnWithDash2 = function(a,b,c) {
    return a + "-" + b +  "-" + c;
}

const returnWithDash3 = (a,b,c) => {
    return a + "-" + b + "-" + c;
}

console.log(returnWithDash3("Abdel","wahab","Oufkir"));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
