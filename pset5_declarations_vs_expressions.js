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

function sum(a,b,c) {
    return (a + b + c) % 3 
    
}
console.log(sum(3,2,3));

const sum2 = function(a,b,c) {
    return (a + b + c) % 3 
}
console.log(sum2(3,2,3));

const sum3 = (a,b,c) => {
    return (a + b + c) % 3 
}
console.log(sum3(3,2,3));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function string(a = 'one-',b = 'two-',c = 'three') {
    return a + b + c

}
console.log(string());

const string2 = function(a = 'one-',b = 'two-',c = 'three') {
    return a + b + c
  }
  console.log(string2());

  const string3 =(a = 'one-',b = 'two-',c = 'three') => {
    return a + b + c
  }
  console.log(string3());
  
  
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function random() {
    return Math.random() * 10
  }
 console.log(random());

  const random2 = function() {
    return Math.random() * 10
  }
  console.log(random2());

  const random3 = () => {
    return Math.random() * 10
  }
  console.log(random3());