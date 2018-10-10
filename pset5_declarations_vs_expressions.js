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

// functionDec:

// function threeParams(a, b, c){

//     return (a + b + c) % 3;

// }

// console.log(threeParams(1, 2, 3));

// functionExp

// const threeParams = function(a, b, c){

//     return (a + b + c) % 3;

// }

// console.log(threeParams(1, 2, 3));

// fatAFunction

// const threeParams = (a, b, c) => {

//     return (a + b + c) % 3;

// }

// console.log(threeParams(1, 2, 3));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

// functionDec

// function threeParams(a, b, c){

//     return a + ' - ' + b + ' - ' + c;

// }

// console.log(threeParams(1, 2, 3));

// functionExp

// const threeParams = function(a, b, c){

//     return a + ' - ' + b + ' - ' + c;

// }

// console.log(threeParams(1, 2, 3));

// fatAFunction

// const threeParams = (a, b, c) => {

//     return a + ' - ' + b + ' - ' + c;

// }

// console.log(threeParams(1, 2, 3));


/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

// functionDec

// function noParamsFunct(){

//     return Math.random();

// }

// console.log(noParamsFunct());

// functionDec:

// const noParamsFunct = function(){

//     return Math.random();

// }

// console.log(noParamsFunct());

// fatAFunction

// const noParamsFunct = () => {

//     return Math.floor(Math.random());

// }

// console.log(noParamsFunct());
