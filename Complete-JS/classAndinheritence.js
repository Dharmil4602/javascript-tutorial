console.log(`Hello`);

class Employee {

    constructor(givenName, givenExperience, givenDivision) 
    {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan()
    {
        return `I am ${this.name} and this company is best`
    }

    joiningYear(x)
    {
        // return (2020 - this.experience);
        return (2020 - x);
    }

    static add(a,b)
    {
        return a + b;
    }
}

class Programmer extends Employee 
{
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub)
    {
        super(givenName, givenExperience, givenDivision); // super will be calling the constructor from the class which we are inheriting.
        this.language = givenLanguage;
        this.github = givenGithub;
    }

    favouriteLanguage()
    {
        if (this.language == `Javascript`) {
            return `Javascript`;
        }

        else
        {
            return `Python`;
        }
    }

    // In static methods we cannot use "this" keyword
    static multiply(a, b)
    {
     return a*b;
    }
}



let employeeDhar = new Employee(`Dharmil`, `2 Years`, `Programming`);
console.log(employeeDhar);
console.log(employeeDhar.slogan());
console.log(`The Joining Year is ` + employeeDhar.joiningYear(20));

// If the function/method is declared as static, then we can call that method directly with the class name

console.log(Employee.add(5,10));

let programmerDhar = new Programmer(`Dharmil Shah`, 2, `Google`, `Javascript`, `Dharmil4602`);
console.log(programmerDhar);
console.log(programmerDhar.favouriteLanguage());
console.log(Programmer.multiply(4,2));

