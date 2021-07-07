/*
    THE FOLLOWING ARE SIMPLY THOUGHT EXERCISES
    
    YOU MAY USE THIS SPACE TO EXPERIMENT WITH EXAMPLES THAT
    DEMO THE QUESTIONS POSED, BUT NO ACTUAL CODE IS NECESSARY
*/

/*
    PROBLEM 1:
    
    Given the following code:*/
    
    const foo = 1; //global 
    function run() {
        const foo = 2; //local
    }
    
    run();
    console.log(foo); // what is foo? why? - global = 1*/


/*
    PROBLEM 2:
    
    Given the following code:*/
    
    function run() {
        const foo = 2; //local
    }
    
    run();
    console.log(foo); // what is foo? why? - undefined because there is not foo variable in the global scope


/*
    PROBLEM 3:
    
    Given the following code:*/
    
    const foo = 1; //global
    function run() {
        console.log(foo); // what is foo? why? - global = 1
    }
    
    run();


/*
    PROBLEM 4:
    
    Given the following code:*/
    
    let foo = 1; //global
    function run() {
        foo = 2; //local
    }
    
    console.log(foo); // what is foo? why? //global = 1
    run();
    console.log(foo); // what is foo? why? // local = 2


/*
    PROBLEM 5:
    
    Given the following code:*/
    
    const foo = 1; //gloabl
    function run() {
        const foo = 2; //local
        console.log(foo); // what is foo? why? //local = 2
    }
    
    console.log(foo); // what is foo? why? //global = 1
    run();
    console.log(foo); // what is foo? why? // global = 1



/*
    PROBLEM 6:
    
    Given the following code:*/
    
    function run() {
        const foo = 1; //local
        function _inner() {
            console.log(foo); // what is foo? why? //local = 1
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? - undefined


/*
    PROBLEM 7:
    
    Given the following code:*/
    
    const foo = 1; //gloabl
    function run() {
        const foo = 2; //local
        function _inner() {
            console.log(foo); // what is foo? why? //local - 2
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? - global 1

/*
    PROBLEM 8:
    
    Given the following code:*/
    
    let foo = 1; //global
    function run() {
        foo = 2; //global = 2
        function _inner() {
            console.log(foo); // what is foo? why? // global 2
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? //global 2


/*
    PROBLEM 9:
    
    Given the following code:*/
    
    const foo = 1; //global
    function run() {
        const foo = 2; //local
        function _inner() {
            const foo = 3; //local
            console.log(foo); // what is foo? why? //local = 3
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? - global = 1


/*
    PROBLEM 9:
    
    Given the following code:*/
    
    let foo = 1; //global
    function run() {
        function _inner() {
            console.log(foo); // what is foo? why? //local = 10
            foo = 10;
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why? //global = 1


/*
    PROBLEM 10:
    
    Given the following code:*/
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        anotherFunctionToCall();
        console.log(foo) //local = 2
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why? - local = 2

/*
    PROBLEM 11:
    
    Given the following code:*/
    
    let foo = 1; //global
    function run( anotherFunctionToCall ) {
        const foo = 9;
        anotherFunctionToCall();
        console.log(foo) //local 9
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why? - global 2


/*
    PROBLEM 12:
    
    Given the following code:*/
    
    let foo = 1;
    function run( anotherFunctionToCall ) {
        foo = 9;
        anotherFunctionToCall();
        console.log(foo) //global 2
    }
    
    run(function() {
        foo = 2;
    });
    console.log(foo); // what is foo? why? - global 2









