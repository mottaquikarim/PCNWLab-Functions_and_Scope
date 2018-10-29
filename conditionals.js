
/*
function equalty (param1,param2){
        if (param1===param2) {
            return true} 
        else {return false;
        }
    }
*/

 /*ananomyous for 2, 3,4 
 const equality2=function (param1,param2){
     if (param1===param2){
         return true;
     }
     return false;
 }*/

 /*
 const equality3=(param1, param2)=> {
     return param1===param2;
 }
 const equality4=(param1, param2)=> param1===param2;
 console.log(equality4(10, 20));*/

//if 3 equals checks the type and value. 
//if 2 equals it checks an automatic assumption.

/*write a function that returns which one of these functions are larger
function isBigger (num1, num2){
if (num1>num2) {
return num1;}
else {
return num2;}}

//second method
const isBigger2= (num1,num2) => {
    if (num1>num2) return num1;
    return num2;
} */

/*write a function that returns whether a given number is even or add 
const evenOrOdd= (num)=>{
    if ((num%2 ===0) {
        return 'even';
    }
    return 'odd';
    } */

/*Write a function that returns whether a number is negative, positive or zero.
const number =(param)=> {
    if (param1<0) return 'negative';
    else if (param1>0) return 'positive';
    else (param1===0) return 'equal to zero';
} */

//Write a function that takes in a parameter with eitheir of the three values (eg "english" "spanish", "german"). Return "Hello, World. It should default to returning English"
//input.toLowercase makes sure all are lowercased for whatever input you put
/*function whatLanguage(input='english') {
    if (input==='english') return 'Hello World';
    else if (input==='spanish') return 'hola mundo';
    else if (input==='german') return 'hallo welt';
    return 'Hello World!';
}
whatLanguage ('english')*/

//Write a function that taked in params animalName & numberOfAnimal. Return a straing that says eitheir in single or plural form. Eg. "5 cats" of "1 dog". What is we enter sheep, fish, or deer ? How do we solve for these solutions?

function numAnimals (animalName, numberOfAnimals) {
    if (numAnimals>1)
    {
        return numberofAnimals + '' + animalName+ 's';
    }
else if (animalName==='fish'|| animalName==="deer"||animalName==="sheep")
{ return numberOfAnimals+ ''+animalname;}

else {
    return numberOfAnimals+ ''+animalname;}
}

const numAnimals2=(animalName, numAnimals) => {
    let statement = numberOfAnimals + ""+ animalName;
    if (numberOfAnimal !== 1 && !(animalName==='fish'|| animalName==="deer"||animalName==="sheep")) { statement +='s';} 
    return statement;
}

console.log (numAnimals('cat', 5));
console.log (numAnimals('dog', 1));
console.log (numAnimals ('fish',10));
console.log (numAnimals ('sheep',4));
console.log (numAnimals ('deer', 10));