/*
    THE FOLLOWING ARE SIMPLY THOUGHT EXERCISES
    
    YOU MAY USE THIS SPACE TO EXPERIMENT WITH EXAMPLES THAT
    DEMO THE QUESTIONS POSED, BUT NO ACTUAL CODE IS NECESSARY
*/

/*
    PROBLEM 1:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?

const foo = 1; //global
    function run() {
        const foo = 2; //local 
    }
    
    run();
    console.log(foo); // what is foo? why? 
/depends on how the variable are being declared. const in line 21 is not going to change const! no error is shown because global and local are 2 diff varables. 
//21 creates a variable, 22 creates a function but doesnt read what s inside a function...just made it 25 nada. 26runs the function...go back and see whats inside now in line 23 it shows const 2 just an assignment. 
//in order to get something outside of a function we need a return key! RETURN key! 
//line 27 looks at global value in line 21 because the local variable is not affecting the global variable.

  /*PROBLEM 2:
    
    Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

/*function run() {
     const foo = 2; //if we remove const we get 2 ***because (look at Tak's rules) ****when a variable is not declared inside of a function it goes up one level up and since there is nothing there foo is now the global variable.

}
run();
console.log(foo); // what is foo? why? food is not defined because the console log in line 50 can not see whats inside of the function. 
*/


/*
    PROBLEM 3:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        console.log(foo); // what is foo? why?
    }
    
    run();
*/
/*const foo = 1; 
    function run() { 
        console.log(foo); // what is foo? why?
    }
    
    run(); //66 global definition,67 function declared,71 invoked,68 hey yo print. 
/*
    PROBLEM 4:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
    }
    
    console.log(foo); // what is foo? why?
    run();
    console.log(foo); // what is foo? why?
*/

/*let foo = 1;
    function run() {
        foo = 2;
    }
    
    console.log(foo); // what is foo? why? //86, 87 (not the braces, 91)     prints 1 
    run(); //if we remove this line the computer just knows we made this and it will never run 87. 
    console.log(foo); // what is foo? why? it will now print 2 because there is no variable declaration. note that there is no CONST declaration. so local changes the variable from global.
/*
    PROBLEM 5:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why?
    }
    
    console.log(foo); // what is foo? why?
    run();
    console.log(foo); // what is foo? why?
*/
/*
const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why? 2
    }
    
    console.log(foo); // what is foo? why?  1
    run();
    console.log(foo); // what is foo? why? 1
// 110, 111 before braces, 116, 
//112...just look inside the local scope at 113 to console log
//then it goes back out to global at 118
/*
    PROBLEM 6:
    
    Given the following code:
    
    function run() {
        const foo = 1;
        function _inner() {
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/
/*
function run() {
    const foo = 1;
    function _inner() {
        console.log(foo); // what is foo? why?
    }
    _inner();
}

run();
console.log(foo); // what is foo? why?

//goes from 140 where it is creating the function, just creating but not doing anything because it not invoked so thats the braces until 146,
//then it goes to run at 148 invokes the function so it goes back to at 140 work down created variable named foo at 141. line 142 it created a function but not invoked until 145. 
//goes back up to 142 and it asks for console log...goes one level up at const foo 1 141. 
//reads down. line 149 will console log showing reference error os UNDEFINED.   


    PROBLEM 7:
    
    Given the following code:
    
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
/*

PROBLEM 8:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

/*
    PROBLEM 9:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            const foo = 3;
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

/*
    PROBLEM 9:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        function _inner() {
            console.log(foo); // what is foo? why?
            foo = 10;
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

/*
    PROBLEM 10:
    
    Given the following code:
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why?
*/

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








