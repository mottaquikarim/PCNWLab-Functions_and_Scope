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
/*
P1 Answer:
foo = 1 because run() does not change the value of foo outside of the function. foo is redeclared inside of function run();  
*/

/*
    PROBLEM 2:
    
    Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

/*
P2 Answer: 
code will error out since it will not recgonize the foo outside of run(), foo was only initialized inside of the function run();
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
/*
P3 Answer:
when invoking run();, foo will display 1. foo was initilazied outside of the function with a value of 1, run() simply console.logs foos value  
*/
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
/*
P4 Answer:
first console.log will display 1. After running run();, the function will change the value of foo (declared outside of run()) to 2, which will be displayed in the 
second console.log.
*/

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
P5 Answer:
First console.log: will display 1. foo value outside of function has not changed.
Second console.log: will display 2. this foo value was initialized inside of the function with a value of 2.
Third console.log: will display 1. foo value outside of function has not changed.
*/

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
P8 Answer:
First console.log: Will print 1 since it is accessing the foo variable that was declared in the parent function run().
Second console.log: Will trigger an error since this console.log is attempting to access a variable (foo) 
that hasn't been declared (outside of a function).
*/
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
/*
P7 Answer:
First console.log: Will print out 2 since the _inner() function contain the console.log is accessing the foo declared 
in the run() function 
Second console.log: Will print out 1 since this console.log access the global foo which has a const value of 1. 
*/

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
P8 Answer:
The run() function access and changes the global foo value to 2 before the console.logs print out the value of foo. So both 
console.logs print out 2. 
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
P8 Answer:
First console.log: Will display 3 since it's using the foo which was declared inside of the _inner() function.
Second console.log: Will display 1 since it's using the global foo which is a const. Note, all other declared foos 
are contained within their respective functions.
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
P9 Answer:
First console.log will display 1. 
The second console.log will display 10 since the _inner() function changes the value of foo (initilized outside of the functions) to 10
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
P10 Answer:
Both console.logs will display 2 because when run() is called the function within the parameters changes the value of foo to 2. 
This change is followed by the two console.logs.
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
P11 Answer:
The first console.log will display 9 since the foo it is pointing to was initilized as a const within the run() function.
The second console.log will display a 2 since the function parameter for run() is running outside of run() 
which will pull the foo variable declared outside of the functions.
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
    
    run(function() {foo = 2;});
    console.log(foo); // what is foo? why?
*/

/*
P12 Answer:
console.log will run twice displaying 2 each time. 
The first time it's because the run() function is called. When called, it will change foo to 9, then it runs the function which was
passed through the parameters. This function changes the value of foo to 2. The function call is perceeded by the first console.log for foo.

After the run() function completes running a second console.log is used which will displayed 2, since run() changed foo to 2. 
*/






