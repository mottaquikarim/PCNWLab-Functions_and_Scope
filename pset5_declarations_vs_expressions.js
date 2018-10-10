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

/*function expression
const blah = function (a=1,b=2,c=3){
    return (a+b+c) % 3;
}
console.log(blah());
*/

/*function declaration
const blah = function (a=1,b=2,c=3){
    return (a+b+c) % 3;
}
console.log(blah()); */

/*function fat arrow
const blah = (a,b,c) =>{
    return (a+b+c) % 3;
}
console.log(blah(1,2,3));*/

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
/*expression
const blah = function (a,b,c)
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(blah('hey','you','wtv'));*/


/* fat
const blah =  (a,b,c) => 
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(blah('hey','you','wtv'))*/

/* function declaration
function blah(a=1,b=2,c=3)
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(blah('hey','you','wtv'));*/

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

/*
const blah = function (a,b,c)
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(blah());
*/

/*fat
const blah =  (a,b,c) => 
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(blah())*/

/*function declaration
function randomNumber()
{
    return Math.random()*10;
}
console.log(randomNumber());*/

/*function expression
const randomNumber2= function()
{
    return Math.random()*10;
}
console.log(randomNumber());

/*fatarrow
const randomNumber3=()=>Math.random()*10;*/