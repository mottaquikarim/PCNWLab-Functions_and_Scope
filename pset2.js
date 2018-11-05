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
const doMath = (firstNum, secondNum, thirdNum) => {
    let sum = firstNum + secondNum;
    let multiplies = sum * thirdNum;
    return multiplies;
}
console.log(doMath( 1,2,3 ));
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
const addMiddleName = (firstName, lastName, middleName = "") =>{
    
    if (middleName.length === 0) {
        return firstName.concat(' ',lastName);
    }
    return firstName.concat(' ',middleName, ' ',lastName);
}
console.log(addMiddleName('John', 'Mabel','Smith'));
/*
    @function defaultPlaceholder
    @param placeholder {string}
    @returns {string}
    @description takes an HTML string and replaces placeholder content with 
                 the placholder argument passed in
    @example defaultPlaceHolder('Hello Wrold!'); 
             // <input type="text" placeholder="Hello Wrold!" />
*/
const defaultPlaceHolder = (placeholder = '') => {
    const inputHolder = placeholder;
    return `<input type="text" placeholder=${inputHolder} />`;
}
console.log(defaultPlaceHolder('Hello Wrold!'));
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
const addClasses = (class1, class2, content) => {
    return `<div class="${class1.concat(' ', class2)}">${content}/div>`;
}
console.log(addClasses('foo', 'bar', 'stuff'));
/*
    @function duplicate
    @param {string} start
    @returns {string}
    @description takes a string, start, and duplicates it (ie: adds to itselft)
                 returns duplicated string
    @example duplicate('hello!'); // hello!hello!
*/

const duplicate = start => {
    return start.concat(start);
}
console.log(duplicate('hello!'));