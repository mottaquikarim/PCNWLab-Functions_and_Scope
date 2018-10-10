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
function remainder(a,b,c){
    console.log((a + b + c) / 3)
}

const remainder2 = function(a,b,c){
    console.log((a + b + c) / 3)
}

const variable = function remainder3(a,b,c){
    console.log((a + b + c) / 3)
}

remainder(1,2,3)
remainder2(1,2,3)
variable(1,2,3)


/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
function dash(a,b,c){
    console.log(a + "-" + b + "-" + c)
}

const dash2 = function(a,b,c){
    console.log(a + "-" + b + "-" + c)
}

const variable2 = function dash3(a,b,c){
    console.log(a + "-" + b + "-" + c)
}

dash(1,2,3)
dash2(1,2,3)
variable2(1,2,3)

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function random(){
    console.log(Math.floor(Math.random() * Math.floor(11)))
}

const random2 = function(){
    console.log(Math.floor(Math.random() * Math.floor(11)))
}

const variable3 = random()

random()
random2()

//done