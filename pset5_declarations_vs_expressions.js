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

function threeParams(a = 0, b = 0, c = 0){
    return (a+b+c) % 3 
}

const yellow = function(a = 0, b = 0, c = 0){
    return (a+b+c) % 3
}

const blue = (a = 0, b = 0, c = 0) =>{
    return (a+b+c) % 3
}

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function threeParamsTwo(a = "one",b = "two", c = "three"){
    return `${a}-${b}-${c}`
}

const green = function(a,b,c){
    return `${a}-${b}-${c}`
}

const red = (a,b,c) => {
    `${a}-${b}-${c}`
}

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function threeParamsThree(){
    return Math.random() * 10
}

const orange = function(){
    return Math.random() * 10
}

const indigo = () => {
    return Math.random() * 10
}