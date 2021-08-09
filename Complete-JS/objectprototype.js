let obj = {
    name: `Dharmil Shah`,
    hobby: `Coding and Developing Websites`
}
console.log(obj);

// Prototype Is Where The Object Is Starting.

function Obj (givenName){
this.name = givenName;
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (){
    this.name = newName;
}
let obj2 = new Obj(`Shah Dharmil`);
console.log(obj2);