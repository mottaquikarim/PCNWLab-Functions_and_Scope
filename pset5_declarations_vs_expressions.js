/*
    FOR EACH PROBLEM BELOW, IMPLEMENT THREE WAYS
    1. AS A FUNCTION DECLARATION
    2. AS AN ANONYMOUS FUNCTION EXPRESSION
    3. AS A NAMED FUNCTION EXPRESSION
    
    RUN BOTH TO ENSURE THEY WORK PROPERLY
*/


// Function Declaration
function fooBar (foo="foo", bar="bar"){
    return `${foo}${bar}`
}

// Function Expression
const namedFooBar = function addBar (foo = "foo", bar = "bar"){
    return `${foo}${bar}`
}

// Anonymous Function Expression
const anonFooBar = (foo = "foo", bar = "bar") => {
    return `${foo}${bar}`
}

console.log(fooBar("foo","bar"))
console.log(namedFooBar("foo","bar"))
console.log(anonFooBar("foo","bar"))

/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 

function declareRemainder(a =0, b =0, c=0){
    let remainder = (a + b + c) % 3
    return remainder
}

const nameRemainder = function findRemainder(a =0, b =0, c=0){
    let remainder = (a + b + c) % 3
    return remainder
}

const anonRemainder = (a =0, b =0, c=0) => {
    let remainder = (a + b + c) % 3
    return remainder
}

console.log(declareRemainder(1,4,5))
console.log(nameRemainder(1, 6, 7))
console.log(anonRemainder(1, 2, 3))


/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

function declareConcat (a, b, c){
    return `${a}-${b}-${c}`
}

const namedConcat = function makeConcat (a, b, c){
    return `${a}-${b}-${c}`
}

const anonConcat =  (a, b, c) => {
    return `${a}-${b}-${c}`
}

console.log(declareConcat("puppy","monkey","baby"))
console.log(namedConcat("rat","cat","dog"))
console.log(anonConcat(1, 2, 3))

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

function declareRandomNum () {
    return Math.floor((Math.random() * 10));
}
const namedRandomNum = function genRandomNum (){
    return Math.floor((Math.random() * 10));
}
const anonRandomNum = () => {
    return Math.floor((Math.random() * 10));
}

console.log(declareRandomNum())
console.log(namedRandomNum())
console.log(anonRandomNum())