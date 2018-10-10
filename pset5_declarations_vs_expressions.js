/*
    FOR EACH PROBLEM BELOW, IMPLEMENT THREE WAYS
    1. AS A FUNCTION DECLARATION
    2. AS AN ANONYMOUS FUNCTION EXPRESSION //FAT ARROW
    3. AS A NAMED FUNCTION EXPRESSION
    
    RUN BOTH TO ENSURE THEY WORK PROPERLY
*/


/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 

function remainder(a, b ,c) {

     return (a + b + c) % 3;
};


const remainderTwo = function (a, b, c) {
    
    return (a + b + c) % 3;
};

const remainderThree = (a, b, c) => {
    
    return (a + b + c) % 3;
};

// (function(a, b, c) 
// {return (a + b + c) % 3;});

console.log(remainder(1,2,3));
console.log(remainderTwo(1,2,3));
console.log(); 

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function dashAdder(a ,b ,c) {
    return `${a}-${b}-${c}`;
};

const dashAdder1 = function (a ,b ,c) {
    return `${a}-${b}-${c}`;
};

const dashAdder2 = (a ,b ,c) => {
    return `${a}-${b}-${c}`;
};

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
