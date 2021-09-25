/*
Regular Expressions:

--> Basic Functions
--> Metacharacter Symbols
--> Character Sets

*/

/*
Regular Expression Basic Functions Are:

1. exec() - This Function Will Return An Array For Match Or null For no Match

2. test() - returns true or false

3. match() - It will return an array of results or will return null.

4. search() - Returns index of first match or returns -1.

5. replace() - Returns the new string in which the expressions are replaced with new one. (if no global flag is given then first match will be replaced).

*/

let reg = /Dharmil/;
// This Is Regular Expression Literal In Js. Regular Expression Literal Is Written In-Between Forward Slashes. 

// reg = /Dharmil/g; 
// Here g is for global i.e.if more than one times the word is repeating then g is used outside the regular expression.

// reg = /Dharmil/i; 
// Here i is for Case Sensitivity.

console.log(reg);
console.log(reg.source); // .source gives us the content present in-between forward slashes.

let s = `This Is Dharmil Shah Here And Also dharmil And Dharmil`;
// Functions To Match Expressions

// 1. exec() - This Function Will Return An Array For Match Or null For no Match

let result = reg.exec(s);

if (result) {
    console.log(result);
    console.log(`The Match The Given Regular Expression Literal Is At Index: ` + result.index);
}

// result = reg.exec(s);
// console.log(result);

// console.log(`The Match The Given Regular Expression Literal Is At Index: `+ result.index);


// 2. test() - returns true or false

let result1 = reg.test(s); 
// here .test will return boolean expression i.e. if the expression is found and is same then it will return true else false.
console.log(result1);

// 3. match() - It will return an array of results or will return null.

// let result2 = reg.match(s); 
// --> Above One Is Wrong Way Of Writing match function

let result2 = s.match(reg);
// --> Above One is The right way of writing match function
console.log(result2);

// 4. search() - Returns index of first match or returns -1.

// let result3 = reg.search(s);
// In above one, .search will return the index at which the expression is present but the above one is wrong way of writing search funtion.

let result3 = s.search(reg);
// In above one, .search will return the index at which the expression is present.
console.log(result3);

// 5. replace() - Returns the new string in which the expressions are replaced with new one. (if no global flag is given then first match will be replaced).

let result4 = s.replace(reg, `Jimmy`);
console.log(result4);

console.log(" ");
console.log(`Second Part Of Regular Expressions Starts Here:`);

/* 
Regular Expressions:

--> Metacharacters

*/

console.log(`Hello`);

let regex = /shah/;
// regex = /^sha/; 
// Here ^ means  expression will match if string starts with the given expression

// regex = /ah$/; 
// Here $ means expression will match if string end with the given expression.

// regex = /s.ah/; 
// Here . matches any one character in the given expression.

// regex = /s*ah/; 
// Here . matches any 0 or more character in the given expression.

regex = /sh?aht?/; 
// The letter just before the question mark will be optional. i.e. if the letter just before question mark is present or not, the expression will be matched. 

let str = `shah is shah`;
let res = regex.exec(str);
console.log(res);

if (regex.test(str)) {
    console.log(`The String "${str}" matches the expression "${regex.source}"`);
}
else 
{
    console.log(`The String "${str}" does not matches the expression "${regex.source}"`);
}

console.log(" ");
console.log(`Third Part Of Regular Expressions Starts Here:`);

/*
 Regular Expressions:

 --> Character Sets - [] sqaure brackets are representation of character sets.
 
*/

let regExp = /D[a-z]armil/;
// The second letter can be any between a to z, as the next letter after D is h which is available in the given range, so it will not five an error.

// Quantifiers: Repeating The letter in a string.

regExp = /Dha{0,2}rmil/; // Here a can occur from 0 to 2 in the given string

// Groupings: We Use Parenthesis {} for groupings.
let str1 = `Dharmil Bhai`;
let resu = regExp.exec(str1);
console.log(`The Result Is: `, resu);

if (regExp.test(str1)) {
    console.log(`The String "${str1}" matches the expression ${regExp.source}`);
}
else 
{
    console.log(`The String "${str1}" does not matches the expression ${regExp.source}`);
}


