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
// FUNCTION DECLARATION
function sumDivide1(a=0, b=0, c=0) {
    const sum = a + b + c;
    return sum / 3;
}
console.log(sumDivide1(2,3,1));

// FUNCTION EXPRESSION

const sumDivide2 = function(a=0, b=0, c=0)  {
    return (a + b + c) / 3;
}
console.log(sumDivide2(2,3,1));

// FAT ARROW FUNCTION

const sumDivide3 = (a=0,b=0,c=0) => {
    return (a + b + c) / 3;
}
console.log(sumDivide3(2,3,1));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
// FUNCTION DECLARATION

function addThreeStrings(a, b, c) {
    return a + '-' + b + '-' + c;
}
console.log(addThreeStrings('one', 'two', 'three'));

// FUNCTION EXPRESSION
const addThreeStrings2 = function(a, b, c) {
    return a + '-' + b + '-' + c;
}
console.log(addThreeStrings2('one', 'two', 'three'));
// FAT ARROW FUNCTION

const addThreeStrings3 = (a, b, c) => {
    return a + '-' + b + '-' + c;
}

console.log(addThreeStrings3('one', 'two', 'three'));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

// FUNCTION DECLARATION
function randomNum() {
    return Math.random(0,10);
}
console.log(randomNum());

// FUNCTION EXPRESSION
const randomNum2 = function() {
    return Math.random(0,10);
}
console.log(randomNum2());
// FAT ARROW FUNCTION
const randomNum3 = () => {
    return Math.random(0,10);
}
console.log(randomNum3());