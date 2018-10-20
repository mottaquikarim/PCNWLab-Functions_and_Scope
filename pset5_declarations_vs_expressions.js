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

//function expression
const threeParams = function (a=1,b=2,c=3){
    return (a+b+c) % 3;
}
console.log(threeParams());


//function declaration
function threeParams1 (a,b,c){
    return (a+b+c) % 3;
}
console.log(threeParams1(a=1,b=2,c=3));

//function fat arrow
const threeparams2 = (a,b,c) =>{
    return (a+b+c) % 3;
}
console.log(threeparams2(1,2,3));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
//expression
const threeStrings = function (a,b,c)
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(threeStrings('one','two','three'));


//fat arrow
const threeStrings1=  (a,b,c) => 
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(threeStrings1('one','two','three'))

// function declaration
function threeStrings2(a,b,c)
{
    return (a+ "-"+ b+ "-" + c);
}
console.log(threeStrings2('one','two','three'));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/



//function declaration
function randomNumber()
{
    return Math.random()*10;
}
console.log(randomNumber());


//function expression
const randomNumber2= function()
{
    return Math.random()*10;
}
console.log(randomNumber2());

//fat Arrow
const randomNumber3=()=>Math.random()*10;
console.log(randomNumber3());