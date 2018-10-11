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
/*
function division(a , b , c){
    return (a + b + c) % 3
}
console.log(division(2 , 4 , 5));


const division = function (a , b , c){
    return (a + b + c) % 3
}
console.log(division(2, 4, 5));

const division = (a, b, c) => {
    return (a + b + c) % 3
}
console.log(division(2, 4, 5));
*/

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
/*
function myStr(a , b , c) {
    return `${a} - ${b} - ${c}`
}
console.log(myStr("one" , "two" , "three"));

const myStr = function (a, b, c) {
    return `${a} - ${b} - ${c}`
}
console.log(myStr("one", "two", "three"));


const myStr = (a, b, c) => {
    return `${a} - ${b} - ${c}`
}
console.log(myStr("one", "two", "three"));
*/

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
/*
const randomNum = () => {
    return Math.floor(Math.random()* 10)

}
console.log(randomNum());
*/