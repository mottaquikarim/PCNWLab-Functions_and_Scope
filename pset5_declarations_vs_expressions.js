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
function operation(a,b,c){
const arith = (a + b + c) % 3

return arith



}
console.log(operation(1,2,3))

const o = function(a,b,c){
    const arith1 = (a + b + c) % 3

    return arith1
    
}
console.log(o(1,2,3))

const p = (a,b,c) =>{


const arith2 = (a + b + c) % 3
return arith2

}
console.log(p(1,2,3))
/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/
function three(a,b, c){

return a + "-"  + b + "-" + c


}
console.log(three("one", "two", "three"))


const dash = function (a,b,c){

    return a + "-"  + b + "-" + c



}
console.log(dash("one", "two", "three"))

const dashs = (a,b,c) => {


    return a + "-"  + b + "-" + c


}
console.log(dashs("one", "two", "three"))
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
function numbers (){
return Math.floor(Math.random()*10)



}
console.log(numbers())
const random = function(){

    return Math.floor(Math.random()*10)


}
console.log(random())
const randoms = () => {
    return Math.floor(Math.random()*10)


}
console.log(randoms())