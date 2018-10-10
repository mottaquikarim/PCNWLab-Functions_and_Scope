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
//DECLARATION
function remainder(a, b, c) {
    let sum = a + b + c;
    return sum % 3;
}
console.log(remainder(1, 2, 3));

//EXPRESSION
const remainder = function(a, b, c) {
    let sum = a + b + c;
    return sum % 3;
}
console.log(remainder(1, 2, 3));

//ARROW
const remainder = (a, b, c) => {
    let sum = a + b + c;
    return sum % 3;
}
console.log(remainder(1, 2, 3));

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
//DECLARTION 
   /* function string(a, b, c) {
        return  `${a}-${b}-${c}`;
    }
    console.log(string("one", "two", "three"));
EXPRESSION
    const string = function(a, b, c) {
        return  `${a}-${b}-${c}`;
    }
    console.log(string("one", "two", "three"));
//ARROW
    const string = (a, b, c) => {
        return  `${a}-${b}-${c}`;
    }
    console.log(string("one", "two", "three"));

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
//DECLARTION
    function randomNum() {
        return Math.random();
    }
    console.log(randomNum());
//EXPRESSION 
   /const randomNum = function() {
        return  Math.random();
    }
    console.log(randomNum());
//ARROW
    const randomNum = () => {
        return  Math.random();
    }
    console.log(randomNum());