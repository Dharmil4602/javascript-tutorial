// Pretend this is coming from server as response
let a = `Dharmil Bhai`;
// a = undefined;
if(a != undefined)
{
    // throw new Error (`Not Undefined`);
}
else
{
    console.log(`This is undefined`);
}


// TYPES OF ERROR

/*
TypeError = occurs when a variable or parameter is not of a valid type.
SyntaxError = occurs when there is an error in syntax.
ReferenceError = occurs when there is an invalid reference.
EvalError= occurs when there is an error in global function.
RangeError=  occurs when a numeric variable or parameter is outside of its valid range.
*/

try {
   
    funtiondha();
} 
catch (error) // This error in the brackets is the error in the try block  
{
    console.log(`Are u ok? You Just Produced An Error`); 
    console.log(error); // This Error Will Be Printed In Text Form
    console.log(error.name);
    console.log(error.message);
}
finally
{
    console.log(`Whether Error Is There Or Not, finally will run`);
}