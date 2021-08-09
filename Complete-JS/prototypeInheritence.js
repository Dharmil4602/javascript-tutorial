const proto = {
    slogan: function (){
        return `This Is Slogan`;
    },
    changeName: function (newName){
        this.name = newName;
    }
}

// This Creates dhar Object

const dhar = Object.create(proto);
dhar.name = `Dharmil Shah`;
dhar.role = `Coder`;
console.log(dhar)

// This Also Creates dhar Object

const dhar1 = Object.create(proto, {
name: {value: `Dharmil`, writable: true}, // this writable when set to true, it allows us to change the value inserted in it

role: {value: `Coder`},
});
dhar1.changeName(`Dharmil-Shah`);
console.log(dhar1);

// Employee Constructor

function Employee(name, salary, experience) {
this.name = name;
this.salary = salary;
this.experience = experience;
}

// Slogan of employee

Employee.prototype.slogan = function(){
    return `We Are Blackberry Employees...!!, Regards ${this.name}`;
}

let employeeDhar = new Employee(`Dharmil`, 8500000, `2 years`);
console.log(employeeDhar);
console.log(employeeDhar.slogan());

// Programmer Constructor

function Programmer(name, salary, experience, language)
{
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inheriting The Prototype

Programmer.prototype = Object.create(Employee.prototype);

// Manually Setting The Constructor

Programmer.prototype.constructor = Programmer;

let programmerDhar = new Programmer(`Dharmil`, 8954000, `Fresher`, `JavaScript, Java, C`);
console.log(programmerDhar);
console.log(programmerDhar.slogan());