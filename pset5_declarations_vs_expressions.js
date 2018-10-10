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

function prob1_decl(a,b,c){
    return (a + b + c) % 3;
}
console.log(prob1_decl(1,2,4));


const prob1_named = function(a,b,c){
    return (a + b + c) % 3;
}
console.log(prob1_named(1,2,4));


const prob1_fat = (a,b,c) => {
    return (a + b + c) % 3;
}
console.log(prob1_fat(1,2,4));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function prob2_decl(a,b,c){
//  return (a+"-"+b+"-"+c);
    return (`${a}-${b}-${c}`)
}
console.log(prob2_decl('one', 'two', 'three'));


const prob2_named = function(a,b,c){
    return (`${a}-${b}-${c}`)
}
console.log(prob2_named('one', 'two', 'three'));


const prob2_fat = (a,b,c) =>{
    return (`${a}-${b}-${c}`)
}
console.log(prob2_fat('one', 'two', 'three'));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function prob3_decl(){
    randomNum = Math.random();
    return randomNum;
}
console.log(prob3_decl());


const prob3_named = function(){
    randomNum = Math.random();
    return randomNum;
}
console.log(prob3_named());


const prob3_fat = () => {
    randomNum = Math.random();
    return randomNum;
}
console.log(prob3_fat());