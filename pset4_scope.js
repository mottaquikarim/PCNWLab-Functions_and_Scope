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
*/
// foo is 1


/*
    PROBLEM 2:
    
    Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?
*/
//undefine because foo does not exist outside of the function

/*
    PROBLEM 3:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        console.log(foo); // what is foo? why?
    }
    
    run();
*/
//foo is 1
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

//foo is 1 than after run foo is 2
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
//foo is 1 than 
//foo is 2 
//than foo is 1

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
//run() prints 1 to screen
//and console.log(foo) will return error
/*
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
//run() will console.log 2
//console.log(foo) will print 1 because that will look at foo outside run func
    
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
//run() prints 2 
//console.log(foo) print 2 because run() function reassigns foo to 2 and it global
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
//run() returns 3 and
//console.log(foo) returns 1


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
//run() prints 1
//console.log(foo) prints 10 because run() reassigns foo before exiting

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
//foo is 2 because run function takes func as arg and than func init foo
//than run print foo
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
//print 9 than print 2 because the function inside the run() reintialize 
//global foo to 2
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

//run.foo is 9 because foo is reinit to 9 than anotherFunctionToCall() reinit global
//variable 1 to 2.




