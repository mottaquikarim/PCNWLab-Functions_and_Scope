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

function sum (a, b, c){
    let value;
    return console.log(value = (a + b + c)/3);
}
sum(2,4,6);

const sum2 = function(a, b, c){
    return (a + b + c)/3;
}
console.log(sum2(2,4,6));

const sum3 = (a, b ,c) => {
    return (a + b + c)/3;
}
console.log(sum3(2,4,6));
/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
function addingStrings (a, b, c){
    return console.log(`${a}-${b}-${c}`);
}
addingStrings("cat","dog","bird");

const addingStrings2 = function (a, b, c){
    return console.log(`${a}-${b}-${c}`);
}
addingStrings2("chocolate","cake","pudding");

const addingStrings3 = (a, b, c) =>{
    return console.log(`${a}-${b}-${c}`);
}
addingStrings3("coffee","tea","milk");
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
function returnRandomNum (){
    return Math.floor(Math.random() * 11); //math.floor is to run down numbers and Math.cell is to run up numbers
}
console.log(returnRandomNum());

const returnRandomNum2 = function (){
    return Math.floor(Math.random() * 11);

}
console.log(returnRandomNum2());

const returnRandomNum3 =() =>{
    return Math.floor(Math.random()*11);
}
console.log(returnRandomNum3());