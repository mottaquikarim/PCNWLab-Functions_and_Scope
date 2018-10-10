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
    PROBLEM 2:
    
    Given the following code:
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why?
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
    PROBLEM 5:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // what is foo? why? ### foo is 2 because it is declared in a new context
    }
    
    console.log(foo); // what is foo? why? ### foo is 1 because foo is declared as 1 in the global environment
    run();
    console.log(foo); // what is foo? why? ### foo is still 1 because the 'foo' in the 'run' function environment is destroyed
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
    console.log(foo); // what is foo? why? ### foo is undefined as it was only declared in the run() function environment
*/

/*
    PROBLEM 7:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2; 
        function _inner() {
            console.log(foo); // what is foo? why? ### foo is 2. function _inner() looks at the environment above it for a reference to 'foo'
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? ### foo is 1. the declared "foo" in the function run() environment is destroyed
*/

/*
    PROBLEM 8:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why? ### foo is 2. foo is declared in the global environment and subsequently redefined in the run() function environment. function _inner is able to check the value of foo in the global context
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? foo is 2. see above
*/

/*
    PROBLEM 9:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            const foo = 3;
            console.log(foo); // what is foo? why? foo is 3 because foo has been defined in the _inner() function environment as  3, and then console.log() function is called in the same environment
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? ### foo is 1. it is defined in the global environment as 1 and any declarations within inner functions have no bearing on it's value
*/

/*
    PROBLEM 9:
    
    Given the following code:
    
    let foo = 1;
    function run() {
        function _inner() {
            console.log(foo); // what is foo? why? ### foo is 1 because it was declared in the global environment as 1. Another "foo" variable was not declared elsewhere
            foo = 10;
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? ### foo is 10 because a value of 10 was reassigned to it in function _inner(). foo was not declared in any other environments
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
    
    // let foo = 1;
    // function run( anotherFunctionToCall ) {
        
    //     anotherFunctionToCall();
    //     console.log(foo)
    // }
    
    // run(function() {
    //     foo = 2;
    // });
    // console.log(foo); // what is foo? why?
*/
// let foo = 1;
//     function run( anotherFunctionToCall ) {
//         const foo = 9;
//         anotherFunctionToCall();
//         console.log(foo)
//     }
    
//     run(function() {
//         foo = 2;
//     });
//     console.log(foo); // what is foo? why?

// let b = 3
//     function whatever(){
//         let a = 1
//         function hey(){
//            b = a * b
//        } 
//     }

// whatever()
// console.log(b);
/*
    PROBLEM 12:
    
    Given the following code:
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        foo = 9;
        anotherFunctionToCall();
        console.log(foo)
    }ROBLEM 11:
    
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

// let foo = 1;
//     function run( anotherFunctionToCall ) {
//         foo = 9;
//         anotherFunctionToCall();
//         console.log(foo)
//     }
    
//     run(function() {
//         foo = 2;
//     });
//     console.log(foo); // what is foo? why?

let foo = 1;
function run( anotherFunctionToCall ) {
    const foo = 9
    anotherFunctionToCall();
    console.log(foo)
}

run(function() {
    foo = 2;
});
console.log(foo); // what is foo? why?






