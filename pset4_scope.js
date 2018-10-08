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

    foo is 1 because it is declared inside and outside of the function.
*/



/*
    PROBLEM 2:
    
    Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?

    foo is undefined and running the code will result in a syntax error because it was only declared inside the function
*/


/*
    PROBLEM 3:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        console.log(foo); // what is foo? why?
        foo is 1 because it was declared outside of the function and is accessible to the function
    }
    run()
*/

/*
    PROBLEM 4:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
    }
    
    console.log(foo); // what is foo? why? 
    foo is 1 because that is the value it was assigned and nothing has been done to change it
    run();
    console.log(foo); // what is foo? why? 
    foo is 2 because the function was run and reassigned it a new value without redeclaring it
*/

/*
    PROBLEM 5:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why?

        foo is 2 because the console.log is being done INSIDE the function, so it follows the scope of the function
    }
    
    console.log(foo); // what is foo? why? 
    foo is 1 because that is the value is was assigned

    run();
    
    console.log(foo); // what is foo? why?
    foo is still 1 because it was declared inside the function and won't be reference by javascript
*/


/*
    PROBLEM 6:
    
    Given the following code:
    
    function run() {
        const foo = 1;
        function _inner() {
            console.log(foo); // what is foo? why?

            foo is 1 because while it's declared in a scope that the inner function can pull from
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?

    foo is undefined because it was only declared inside a function
*/

/*
    PROBLEM 7:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why?
            foo is 2 because it is declared inside of a scope available to the inner function
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
    foo is 1 because it is declared inside and outside of a function, and when the function is over,
    javascript will no longer pull from the scope of the function.

*/

/*
    PROBLEM 8:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why?
            foo is 2 because it is reassigned a value that is still accessible to the function.
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
    foo is 2 because the function has been run by javascript and the new value can be referenced
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
            foo is 3, because it is declared and then logged inside the same scope as being 3
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
    foo is 1 because it was declared outside and inside of a function. Javascript will not reference variables declared inside a function
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

    foo is 2 because the value was reassigned and not redelcared, the function is being run and will allow javascript to reference the new value.
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
     
    foo is 2, because while the while the function that is reassigning the value to foo is not nested INSIDE of the function redeclaring it
    so the new value can be reference as it is available in the global scope.
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

    foo is 2 because the value is never redeclared, only reassigned, so it can be referenced by javascript.
*/