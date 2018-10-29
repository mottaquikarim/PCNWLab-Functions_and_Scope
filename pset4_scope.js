/*
    THE FOLLOWING ARE SIMPLY THOUGHT EXERCISES
    
    YOU MAY USE THIS SPACE TO EXPERIMENT WITH EXAMPLES THAT
    DEMO THE QUESTIONS POSED, BUT NO ACTUAL CODE IS NECESSARY
*/


 //   PROBLEM 1:
    
//    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why? foo is 
/* REWRITTEN/ ANSWER: 
const foo = 1; //global
    function run() {
        const foo = 2; //local 
    }
    
 run();
console.log(foo); // what is foo? why? 
//ANSWER: depends on how the variable are being declared. const in line 21 is not going to change const! no error is shown because global and local are 2 diff varables. 
//21 creates a variable, 22 creates a function but doesnt read what s inside a function...just made it nothing in line 25. 26runs the function...the comp goes back and sees whats inside now in line 23 it shows const 2 just an assignment. 
//in order to get something outside of a function we need a return key! RETURN key! 
//line 27 looks at global value in line 21 because the local variable is not affecting the global variable.
//therefore foo prints to be 1 because it is console.logging outside of the local scope */
//---------------------------------------------------PROBLEM 2:
    
  //  Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?

/*REWRITTEN/ANSWER: 
function run() {
     const foo = 2; //if we remove const we get 2 ***because (look at Tak's rules) ****when a variable is not declared inside of a function it goes up one level up and since there is nothing there foo is now the global variable.

}
run();
console.log(foo); // what is foo? why? foo is not defined because the console log in line 50 can not see whats inside of the function. 
*/



 //-----------------------------------------------------   PROBLEM 3:
    
//  Given the following code:
    
    const foo = 1;
    function run() {
        console.log(foo); // what is foo? why?
    }
    
    run();
//REWRITTEN/ANSWER: 
/*const foo = 1; 
    function run() { 
        console.log(foo); // what is foo? why? 1 because it goes back to global when not defined at local scope
    }
    
    run(); //line 66 global definition,line 67 function declared,line 71 invoked,line 68 prints 1
*/
 //-------------------------------------------------------   PROBLEM 4:
    
//Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
    }
    
    console.log(foo); // what is foo? why? foo is 1 because console log is outside of local scope
    run();
    console.log(foo); // what is foo? why? foo is 2 beccause there is no const in line 77 and it will hence replace the value of foo from 77 with foo of 2
                      // also because line 83 invokes the local function
/*let foo = 1;
    function run() {
        foo = 2;
    }
REWRITTEN/ANSWER:  
    console.log(foo); // what is foo? why? //lines  86, 87 (not the braces, 91)     prints 1 
    run(); //if we remove this line the computer just knows we made this and it will never run 87. 
    console.log(foo); // what is foo? why? it will now print 2 because there is no variable declaration. note that there is no CONST declaration. so local changes the variable from global.
*/
//---------------------------------------------------------PROBLEM 5:
    
//Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why? 2 because it looks at the local scope in the local function with const foo of 2
    }
    
    console.log(foo); // what is foo? why? 1 because computer looks at line 110,111 before opening brace {
    run();
    console.log(foo); // what is foo? why? 1 because this is running the global function once more where there is a const variable declared

/*REWRITTEN/ ANSWER
const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why? 2
    }
    
    console.log(foo); // what is foo? why?  1
    run();
    console.log(foo); // what is foo? why? 1
// lines 110, 111 before braces, 116, 
//lines 112...just look inside the local scope at line 113 to console log
//then it goes back out to global at line 118
*/
//---------------------------------------------------------PROBLEM 6:
    
//Given the following code:
    
    function run() {
        const foo = 1;
        function _inner() {
            console.log(foo); // what is foo? why? 1 because it sees there is no local definition for foo so it looks for it in global
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? reference error because no foo as given at function run

/* REWRITTEN/ ANSWER
function run() {
    const foo = 1;
    function _inner() {
        console.log(foo); // what is foo? why?
    }
    _inner();
}

run();
console.log(foo); // what is foo? why?

//goes from line 140 where it is creating the function, just creating but not doing anything because it is not invoked so thats the braces until 146,
//then it goes to run at 148 invokes the function so it goes back to at 140 work down created variable named foo at 141. line 142 it created a function but not invoked until 145. 
//goes back up to 142 and it asks for console log...goes one level up at const foo 1 141. 
//reads down. line 149 will console log showing reference error as UNDEFINED.   
*/

 //-------------------------------------------------------   PROBLEM 7:
    
//Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why? 2 because of const function inner goes up to const foo in line 162
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? 1 because function run will look up at function declared foo at global 1


/* REWRITTEN/ ANSWER
const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
    */


//---------------------------------------------------------PROBLEM 8:
    
// Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why? 2 because function inner goes up one scope where food is declared and replacing the original foo of 1 with a 2because of let no const declaration
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? 2 because it is invoking the run function where the original global foo declared at 1 is defined there is no const. so 2 is replaced with 2.


//
//-------------------------------------------------------  PROBLEM 9:
    
//Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            const foo = 3;
            console.log(foo); // what is foo? why? 3 prints what is inside of the braces at the local scope where foo is defined with 3
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? 1 looks at global definition where there is a const variable of foo defined to 1. const means not allowed to redefine that variable value


//
//-------------------------------------------------------------PROBLEM 9b:
    
// Given the following code:
    
    let foo = 1;
    function run() {
        function _inner() {
            console.log(foo); // what is foo? why? 1 computer wont recognize 10 because javascript reads from the top. only recognizes foo at global where if there is no loca definition of the console log at a local ***before console log is written, then it will go to global scope. 
            foo = 10;
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? 10 because it is replacing the global variable since the global variable was defined with let and not const 


//
//-------------------------------------------------------------- PROBLEM 10:
    
//Given the following code:
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why? 2 twice. because it is invoking the run function where it console logs the foo defined in  line 254. although "another function to call" is 
                      //written before, it is encapsulated inside the run function. foo is written with let globally, hence it is replced with a 2 from ine 254 therefore, once invoked 
                      //in line 253, it will print the foo of 2 from 254. 


/*
    PROBLEM 11:
    
    Given the following code:
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        const foo = 9;
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why?
*/

/*
    PROBLEM 12:
    
    Given the following code:
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        foo = 9;
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why?
*/








