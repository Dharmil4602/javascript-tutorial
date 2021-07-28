let age = `20`;

if (age == 18) // == will be checking only for the value provided, not the data type
{
console.log(`You Are Not Eligible`);    
} 
// else if(age === 20) // === will be checking the data type of variable as well as the value

else if(age === `20`) // === will be checking the data type of variable as well as the value
{
    console.log(`You Are Eligible`);
}
else
{
    console.log(`You Are Not That Much Eligible`);
}

// To Find Whether The Variable Is Defined Or Not: , try commenting the variable n.

let n = 500;

if (typeof n != `undefined`) 
{
console.log(`Variable is Defined`);    
} 
else 
{
    console.log(`Variable is Not Defined`);
}

// Ternary Operator

let age1 = 25;
console.log(age1 == 20? `Age Is 20`: `Age Is Not 20`);

age1 = 30;

switch (age1) {
    
    case 10: 
        console.log(`Your Age Is 10`);
        break;
    
    case 20: 
        console.log(`Your Age Is 20`);
        break;
    
    case 30: 
        console.log(`Your Age Is 30`);
        break;
    
    case 40: 
        console.log(`Your Age Is 40`);
        break;
    
    case 50: 
        console.log(`Your Age Is 50`);
        break;

    default:
        console.log(`None Of The Above`);
        break;
}
