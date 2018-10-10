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

//FAT ARROW 
const remainderOfSum1 = (a,b,c) => {
    return ((a + b + c)%3);
}
console.log(remainderOfSum1(1,2,3));

//FUNCTOIN DECLARATION
function remainderOfSum2(a,b,c){
    return ((a + b + c)%3);
}
console.log(remainderOfSum2(14,5,6));

//FUNCTION EXPRESSION
const remainderOfSum3 = function(a,b,c) {
    return ((a + b + c)%3);
}
console.log(remainderOfSum3(7,28,9));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

//FAT ARROW
const dashInBtwn1 = (a,b,c) => {
    return `${a}-${b}-${c}` 
}
console.log(dashInBtwn1("a","b","c"));

//FUNCTION DECLARATION
function dashInBtwn2(a,b,c) {
    return `${a}-${b}-${c}` 
} 
console.log(dashInBtwn2("a","b","c"));

//FUNCTION EXPRESSION
const dashInBtwn3 = function(a,b,c){
    return `${a}-${b}-${c}` 
}
console.log(dashInBtwn3("a","b","c"));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)

*/

//FAT ARROW

const randomNum1 = () => {
    return Math.random() * 10;
}
console.log(randomNum1());

//FUNCTION DECALARATION

function randomNum2() {
    return Math.random() * 10;
}
console.log(randomNum2());

//FUNCTION EXPRESSION

const randomNum3 = function() {
    return Math.random() * 10;
}
console.log(randomNum3());