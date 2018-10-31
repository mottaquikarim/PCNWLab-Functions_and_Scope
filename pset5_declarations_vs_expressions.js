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
//function declaration 
function sumOfThree1(a, b, c ){
   return (a + b + c ) % 3;  

}
console.log(sumOfThree1(4,5,6));

//function expression 
const sumOfThree2 = function(a, b, c){
    return (a + b + c ) % 3;  

}
console.log(sumOfThree2(4,5,6)); 
// function fat arrow 

const sumOfThree3 = (a, b, c) => {
    return (a + b + c ) % 3; 
}
console.log(sumOfThree3(4,5,7));

//function fat arrow shorter
const sumOfThree4 = (a, b, c) => (a + b + c ) % 3;
console.log(sumOfThree4(4,5,7));
/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
// function declaration 

 function threeParams(a = "one", b = "two", c= "three"){
      return a + "-" + b +"-"+ c;       

 }
 console.log(threeParams());

 //function expression 

 threeParams1 = function(a = "one", b = "two", c= "three"){
     return a + "-" + b +"-"+ c; 
 }
 console.log(threeParams1());
 // function fat arrow expression 

 const threeParams2 = (a = "one", b = "two", c= "three") => {
    return a + "-" + b +"-"+ c; 
}
console.log(threeParams2());
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
// function declaration 


function noParam(){
    return Math.floor(Math.random() * 11);       

}
console.log(noParam());

//function expression 

noParam1 = function(){
    return Math.floor(Math.random() * 11); 
}
console.log(noParam1());
// function fat arrow expression 

const noParams2 = () => {
    return Math.floor(Math.random() * 11); 
}
console.log(noParams2());