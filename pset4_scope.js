/*
    THE FOLLOWING ARE SIMPLY THOUGHT EXERCISES
    
    YOU MAY USE THIS SPACE TO EXPERIMENT WITH EXAMPLES THAT
    DEMO THE QUESTIONS POSED, BUT NO ACTUAL CODE IS NECESSARY
*/
/*

    
    const foo = 1;
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why? foo is one because it was already declared outside the function */



/*
    
    function run() {
        const foo = 2;
    }
    
    run();
    console.log(foo); // what is foo? why? Foo is undefined/ unassigned  because it is only declared in the function, so it dies after its used
*/

  /*  
    const foo = 1;
    function run() {
        console.log(foo); // what is foo? why? // Foo is one because we did not make any changes to it
    }
    
    run();
*/


   /* 
    let foo = 1;
    function run() {
        foo = 2;
    }
    
    console.log(foo); // Foo is 1 because it is a global variable and we have not made any changes to it
    run();
    console.log(foo); // what is foo? why? foo has changed to 2 because the run function was called and assigned another value to it
*/
/*
    
    const foo = 1;
    function run() {
        const foo = 2;
        console.log(foo); // 
    }
    
    console.log(foo); // what is foo? why? 1
    run(); // 2 Foo is assigned to 2 in the function and since it was declared, it gave that value to it
    console.log(foo); // what is foo? why? 1 because foo was declared as 1 outside the function (Javascript does not look for it in the function)
*/


    /*
    function run() {
        const foo = 1;
        function _inner() {
            console.log(foo); // what is foo? Foo is one because it's declared outside
        }
        _inner();
    }
    
    run();
    console.log(foo); // will be undefined because it can't be accesed since it's only declared within the functions

/*
    PROBLEM 7:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            console.log(foo); // Foo is two because it was it was declared as 2 in the next line above
        }
        _inner();
    }
    
    run();
    console.log(foo); Foo is One because it was declared as one outside our function
*/


 /*   //#7
    
    let foo = 1;
    function run() {
        foo = 2;
        function _inner() {
            console.log(foo); // Foo is two because it was re assigned above
        }
        _inner();
    }
    
    run();
    console.log(foo); // Foo is 2 because it was re assigned in our run() function
*/
/*
//## 8
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            const foo = 3;
            console.log(foo); // Foo is three because it was last declared in line 116
        }
        _inner();
    }
    
    run();
    console.log(foo); // 1 because we did not re assign it in our functions
*/
/*
//##### 9
    

    
    let foo = 1;
    function run() {
        function _inner() {
            console.log(foo); // foo is one because it was last declared in line 130 and has not been reassigned yet
            foo = 10;
        }
        _inner();
    }
    
    run();
    console.log(foo); // Foo is 10 because it was reassigned in our _inner() function

*///// #### 10

    /*
    let foo = 1;
    function run( anotherFunctionToCall ) {
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // Foo is two because when we invoke our run function, it re asssigns foo to two and it logs it
*/


    
 /*  //#11
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        const foo = 9;
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // foo is two because the fuction used as a parameter of function is re assigning foo to 2
*/

/*
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        foo = 9;
        anotherFunctionToCall();
        console.log(foo)
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // Foo is two because it's being re-assigned with our passing function

*/






