/*let age =26;
let beverage;
//juice or beer 
const legalBeverage = (age) =>{
    let beverage =" ";

    if (age>=21) {
        beverage="Beer";
    }
    else {
        beverage="Juice";
    }
    return beverage;
}*/

/*Ternary Operator 
//(Conditional) ? True Case: False Case : 
const legalBeverage = (age)=>{
    let beverage = age>= 21 ? 'Beer' : 'Juice';
    return beverage;
}
    console.log (legalBeverage(45)); 
//colon seperates the true case and the false case 
//true value goes before the :
//the false value goes after the :
//before ? is teh conditional operation */

/*const legalBeverage3=(age)=>{
    return age=> 21 'beer' :'juice;'
}*/

/*
console.log(true ? 'This is true' : 'This is false');
//this is true because it's a true fact
console.log(false ? 'This is true' : 'This is false');
//this is false */

/*Problem1 
function equality (param1, param2) {
    if (param1=== param2) {
        return true;
    }
    else {return false;}
}same as this ...... 
//const equality =(a,b)=> a===b ? true:false */



/*problem 2
function isBigger (num1, num2){
    if (num1>num2) {
    return num1;}
    else {
    return num2;}}

    const isBigger =(a,b) => a>b ? a : b;
    
    console.log(isBigger (10,12));
    console.log (isBigger (21,10));
    
    // fat arrow and ternary operation allows you to write your one liner
    ternary one lin, no return needed for fat arrow or ternary */

    
   //prob 3

   /*const evenOrOdd= (num)=>{
    if ((num%2 ===0) {
        return 'even';
    }
    return 'odd';
    } */
/*
    const evenOrOdd =(num) => num%2===0 ? "even": "odd"; 
    console.log (evenOrOdd (42));
    console.log (evenOrOdd (13));*/

    /*prob 4
    /*const number =(param)=> {
        if (param1<0) return 'negative';
        else if (param1>0) return 'positive';
        else (param1===0) return 'equal to zero';

    const negativeOrPositive = (num) => num >=0 ? "negative" : "positive";
    console.log (negativeOrPositive(-21));*/

/* Notes:
    const sayHello =(username) => {
        return 'Hello my name is $(username)';
    }
    console.log(sayHello());
    //shows hello my name is //undefined (if it is empty)*/
/*
    //fixing undefined response case 1 
    const sayHello =(username) => {
         username ='unknown'; //if u put let the username parameter gives error
        return `Hello my name is $(username)`;
    }
    console.log(sayHello());//adding a name inside the parameters will show unknown

    //case 2
    const sayHello =(username='unknown') => {
       return `Hello my name is $(username)`;
   }
   console.log(sayHello());
   console.log (sayHello());//
   */

   /*
//case 3
const sayHello =(username) => {
    username = typeof username==='undefined' ? 'unknown': username;
    //in this case we defined username or else it will show my name is undefined
    return `Hello my name is ${username}`;
}
console.log(sayHello('mo'));
console.log (sayHello());// */



//case 4:simpler
//const sayHello =(username) => {
//    username = typeof username==='undefined' ? 'unknown': username; //if you switch true or false just switch the values between the : for the ternary
//    return `Hello my name is ${username}`;
//}
//console.log(sayHello('mo'));
//console.log (sayHello());
//if (false)/*change value to true and compile*/ 
  //      /*can also change value to 1 or 0*/ {
    //console.log ("this is true")}
    //else { console.log ("this is false")}



/**
 * Notes from office hrs
 * 
 */
//  let str = 'abC'
 console.log('abC'.charCodeAt(0,1,2))
    