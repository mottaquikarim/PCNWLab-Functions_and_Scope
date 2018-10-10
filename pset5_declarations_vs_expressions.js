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

function remainderOfSum1(a,b,c){
    return (a + b +c) % 3;
}
console.log(remainderOfSum1(1,3,6));

//----------------

const remainderOfSum2 = function (a,b,c){
    return (a + b +c) % 3;
}

console.log(remainderOfSum2(1,3,6));

//--------------------

const remainderOfSum3 = (a,b,c) =>{
    return (a + b +c) % 3;
}
console.log(remainderOfSum3(1,3,6));


/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function addDashes1(a,b,c){
    return a+'_'+b+'_'+c;
}
console.log(addDashes1('one','two','three'));

//-----------------------

const addDashes2 = function (a,b,c){
    return a+'_'+b+'_'+c;
}
console.log(addDashes2('one','two','three'));

//----------------------

const addDashes3 = (a,b,c)=>{
    return a+'_'+b+'_'+c;
}
console.log(addDashes3('one','two','three'));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/


function randomNum1 (){
    return Math.random ()*10;
}
console.log(randomNum1());

//--------------

const randomNum2 = function(){
    return Math.random ()*10;
}
console.log(randomNum2());

//-------------

const randomNum3 = ()=>{
    return Math.random ()*10;
}
console.log(randomNum3());
