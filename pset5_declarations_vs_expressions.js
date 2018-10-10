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
function addThreeNums(a, b, c){
    return a + b + c;
}
console.log("Function declaration: " + addThreeNums(1,2,3));//Function declaration.

let addTNums = (a, b, c) => {
    return a + b + c;
}
console.log("Fat arrow expression: " + addTNums(4,5,6));//Fat arrow expression

let threeNums = function(a, b, c){
    return (a + b + c);
};
console.log("Named function expression: " + threeNums(7, 8, 9));//Named function expression.
console.log("");//New line for organization.
/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
function addThreeDash(a1, b1, c1){
    return a1 + '-' + b1 + '-' + c1;
}
console.log("Function declaration: " + addThreeDash('apple','cheese','cake'));//Function declaration.

let addTDash = (a1, b1, c1) => {
    return a1 + '-' + b1 + '-' + c1;
}
console.log("Fat arrow expression: " + addTDash('orange','ice','cream'));//Fat arrow expression

let threeDash = function(a1, b1, c1){
    return a1 + '-' + b1 + '-' + c1;
};
console.log("Named function expression: " + threeDash('pumpkin','spice','latte'));//Named function expression.
console.log("");//New line for organization.
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
function randomNum(){
    return Math.random() * 11;
}
console.log("Function declaration: " + randomNum());//Function declaration.

let randomN = () => {
    return Math.random() * 11;
}
console.log("Fat arrow expression: " + randomN());//Fat arrow expression

let numRand = function(){
    return Math.random() * 11;
};
console.log("Named function expression: " + numRand());//Named function expression.