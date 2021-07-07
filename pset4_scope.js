/*
    THE FOLLOWING ARE SIMPLY THOUGHT EXERCISES
    
    YOU MAY USE THIS SPACE TO EXPERIMENT WITH EXAMPLES THAT
    DEMO THE QUESTIONS POSED, BUT NO ACTUAL CODE IS NECESSARY
*/


    // PROBLEM 1:
    
    // Given the following code:
    
    // const foo = 1;
    // function run() {
    //     const foo = 2;
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // foo is going to be equal to 1. Because the variable was declared in the global scope
    // and the function is not being invoked. 




    // PROBLEM 2:
    
    // Given the following code:
    
    // function run() {
    //     const foo = 2;
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // In this case, foo is not declared. It doesnt exist in the global scope, it only does
    // on the functional scope.



    // PROBLEM 3:
    
    // Given the following code:
    
    // const foo = 1;
    // function run() {
    //     console.log(foo); // what is foo? why?
    // }
    
    // run();

    // In this case, foo is equal to 1. Even though foo hasnt been declared within the function
    // it was declared outside of it. JS can reach out of the function and grab the value of the variable.


    // PROBLEM 4:
    
    // Given the following code:
    
    // let foo = 1;
    // function run() {
    //     foo = 2;
    // }
    
    // console.log(foo); // what is foo? why?
    // run();
    // console.log(foo); // what is foo? why?

    // The first foo is equal to 1, but after logging that foo to the console we invoked the function
    // inside the function it was declared that foo is equal to 2, so after logging it we get the updated
    // value.
    


    // PROBLEM 5:
    
    // Given the following code:
    
    // const foo = 1;
    // function run() {
    //     const foo = 2;
    //     console.log(foo); // what is foo? why?
    // }
    
    // console.log(foo); // what is foo? why?
    // run();
    // console.log(foo); // what is foo? why?

    // In this case, were logging the variable foo which is equal to 1, in our global scope. After that
    // JS goes down and sees a function add a new value to foo and log it inside of the function, thats
    // why we get 2. It then goes outside of the function and calls the foo variable once again which again
    // becomes its original value 1. 



    // PROBLEM 6:
    
    // Given the following code:
    
    // function run() {
    //     const foo = 1;
    //     function _inner() {
    //         console.log(foo); // what is foo? why?
    //     }
    //     _inner();
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // In this case it throws an error because our variable foo hasnt been declared in our global scope
    // Yes we are invoking the run function which has a variable foo inside, BUT that doesn't mean that
    // itll be usable outside. 



    // PROBLEM 7:
    
    // Given the following code:
    
    // const foo = 1;
    // function run() {
    //     const foo = 2;
    //     function _inner() {
    //         console.log(foo); // what is foo? why?
    //     }
    //     _inner();
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // This is the same exact case as p6, this one works. Thats because the variable foo was declared 
    // in the global scope as well, that way our code doesnt break when JS tries to log the variable
    // on the last line. 


    // PROBLEM 8:
    
    // Given the following code:
    
    // let foo = 1;
    // function run() {
    //     foo = 2;
    //     function _inner() {
    //         console.log(foo); // what is foo? why?
    //     }
    //     _inner();
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // This case gives us the same answer twice (2) because we used a the let keyword which allows us to 
    // set variables whose value can change and inside the function we didnt use the let keyword and just 
    // went on and gave it a new value.


    // PROBLEM 9:
    
    // Given the following code:
    
    // const foo = 1;
    // function run() {
    //     const foo = 2;
    //     function _inner() {
    //         const foo = 3;
    //         console.log(foo); // what is foo? why?
    //     }
    //     _inner();
    // }
    
    // run();
    // console.log(foo); // what is foo? why?

    // foo ends up being 3 in this case because were logging it inside of the function _inner and 
    // in there we redefined its value before logging it.

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


    // PROBLEM 10:
    
    // Given the following code:
    
    // let foo = 1;
    // function run( anotherFunctionToCall ) {
    //     anotherFunctionToCall();
    //     console.log(foo)
    // }
    
    // run(function() {
    //     foo = 2;
    // });
    // console.log(foo); // what is foo? why?

    // This case was very interesting because a variable foo was declared w a value of 1 and then 
    // declared a function that is supposed to log foo, however, afterwards we called the function
    // and redefined its parameter to be 2. 



    // PROBLEM 11:
    
    // Given the following code:
    
    // let foo = 1;
    // function run( anotherFunctionToCall ) {
    //     const foo = 9;
    //     anotherFunctionToCall();
    //     console.log(foo)
    // }
    
    // run(function() {
    //     foo = 2;
    // });
    // console.log(foo); // what is foo? why?

    // In this case we get 9 for the initial log because it was logged inside after the variable was defined
    // the 2nd function redefined our variable since it was a declared by let.


    // PROBLEM 12:
    
    // Given the following code:
    
    // let foo = 1;
    // function run( anotherFunctionToCall ) {cd
    //     foo = 9;
    //     anotherFunctionToCall();
    //     console.log(foo)
    // }
    
    // run(function() {
    //     foo = 2;
    // });
    // console.log(foo); // what is foo? why?

    // In this case the result of these consolelogs is 2 twice. This happens because even though we declared 
    // the foo variable to be 1 and we reassigned it inside of the run function; below that we called 
    // the run function again and we assigned it a new value once again. We get 2 number two because we logged
    // the foo variable twice.


    







