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
function doMath(num1, num2, num3){
    let ans = (num1 + num2) * num3;
    return ans;
}
console.log(`Num 1: 9
Num2: 6
Num3: 3
Answer: ` + doMath(9,6,3)) //Domath 9 + 6 = 15. 15 * 3 = 45
console.log();//New line for organization.
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
function addMiddleName(f_name, m_name, l_name){    
    if(l_name == ""){
        l_name = m_name;
        let newName = f_name + " " + l_name;
        return newName;
    }
    else if(m_name === ""){
        let newName = f_name + " " + l_name;
        return newName;
    }
    else{
        let newName = f_name + " " + m_name + " " + l_name;
        return newName;
    }
}
console.log("My name is " + addMiddleName("John", "Missing", "Doe"));//Full name with middle name.
console.log("My name is " + addMiddleName("Tommy","","Pom"));//Full name with correct blank middle name format.
console.log("My name is " + addMiddleName("Richard","Marrow",""));//Full name but entered last name as middle name.
console.log();//New line for organization.
/*
    @function defaultPlaceholder
    @param placeholder {string}
    @returns {string}
    @description takes an HTML string and replaces placeholder content with 
                 the placholder argument passed in
    @example defaultPlaceHolder('Hello Wrold!'); 
             // <input type="text" placeholder="Hello Wrold!" />
*/
function defaultPlaceHolder(holder="default"){
    return holder;
}
console.log("The new placeholder is '" + defaultPlaceHolder() + "'");
console.log("The new placeholder is '" + defaultPlaceHolder("Helloworld.") + "'");
console.log();//New line for organization.
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

}

console.log();//New line for organization.
/*
    @function duplicate
    @param {string} start
    @returns {string}
    @description takes a string, start, and duplicates it (ie: adds to itselft)
                 returns duplicated string
    @example duplicate('hello!'); // hello!hello!
*/
function duplicate(dupThis){
    let multi = dupThis + dupThis;
    return multi;
}

console.log("Duplicating 'apple' results in: " + duplicate("apple"));

