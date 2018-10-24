/*
    @function doMath
    @param firstNum {number} 
    @param secondNum {number}
    @param thirdNum {number}
    @returns {number}
    @description takes firstNum, adds it to secondNum
                 then multiplies sum to thirdNum
                 returns that computed value
    @example doMath( 1,2,3 ); // 9
*/

function doMath(firstNum, secondNum, thirdNum){
    
    if (typeof firstNum !== "number" || typeof secondNum !== "number" || typeof thirdNum !== "number"){
        return "Invalid input"
    }

    else{
        const endValue = (firstNum + secondNum) * thirdNum
        return endValue
    }
}

console.log(doMath(1, 2))

/*
    @function addMiddleName
    @param firstName
    @param middleName
    @param lastName
    @returns {string}
    @description takes the first and last name
                 adds middle name in between
                 returns the new string
                 if no middle name exists, just 
                 return firstname and last name
    @example addMiddleNmae('John', 'Mabel', 'Smith'); // John Mabel Smith
*/

function addMiddleName(firstName, middleName, lastName){
    
    const fullName = `${firstName} ${middleName} ${lastName}`
    const firstAndLastName = `${firstName} ${middleName}`

    if (typeof lastName !== "undefined"){
        return fullName
    }

    else{
        return firstAndLastName
    }
}

console.log(addMiddleName("Karan", " 'I swear I know what I'm doing guys' ", "Taneja"))
console.log(addMiddleName("Karan", "Taneja"))

/*
    @function defaultPlaholder
    @param placeholder {string}
    @returns {string}
    @description takes an HTML string and replaces placeholder content with 
                 the placholder argument passed in
    @example defaultPlaceHolder('Hello Wrold!'); 
             // <input type="text" placeholder="Hello Wrold!" />
*/

function defaultPlaceholder(placeHolder){
    
    const finalResponse = `input type="text" placholder="${placeHolder}"`
    return finalResponse

}

console.log(defaultPlaceholder("Pie"))

/*
    @function addClasses
    @param {string} class1
    @param {string} class2
    @param {string} content
    @returns {string}
    @description adds classes to html string
    @example addClass('foo', 'bar', 'stuff');
             // <div class="foo bar">stuff</div>
*/

function addClasses(class1, class2, content){
    
    const classAdded = `<div class=${class1} ${class2}>${content}</div>`

    if(class1 === undefined || class2 === undefined || content === undefined){
        return "Input error"
    }
    else{
        return classAdded
    }
}

console.log(addClasses("mind", "fudge"))
console.log(addClasses("mind", "fudge", "lol"))

/*
    @function duplicate
    @param {string} start
    @returns {string}
    @description takes a string, start, and duplicates it (ie: adds to itselft)
                 returns duplicated string
    @example duplicate('hello!'); // hello!hello!
*/

function duplicate(string){
    const stringDuped = string + string
    return stringDuped
}

console.log((duplicate("lulz!")))