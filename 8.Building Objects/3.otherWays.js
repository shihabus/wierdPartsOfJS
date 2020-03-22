console.log("~~~~~~~~~~ Object.creat ~~~~~~~~~~~");
var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function() {
    // we need to use this
    // orelse it will try to look outside for firstname
    return `Hi ${this.firstname}`;
  }
};

var Shihab = Object.create(person);
// Creates a new Object
// who's __proto__ is set to person Object

console.log(Shihab);
console.log(Shihab.firstname);
console.log(Shihab == person);
console.log(Shihab === person);

Shihab.firstname = "Shihab";
Shihab.lastname = "Subair";
// Override the properties and method in base Object

console.log(Shihab);

// POLYFILL
if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error("Object.create only accepts a single param");
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

// ---------------------------
// CLASS
console.log(`~~~~~~~~~~~ CLASS ~~~~~~~~~~~~~`);
class PersonClass {
  // this is more like an function constructor
  constructor(firstname = "Default", lastname = "Default") {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    return `Hi ${this.firstname}`;
  }
}

console.log("type of Person class:", typeof PersonClass);
console.log("prototype Person class:", PersonClass.prototype);

var shifa = new PersonClass("Shifa");
console.log("Object created from Person class:", shifa);
console.log("It's proto:", shifa.__proto__);

shifa.husband = "Anwar";
console.log("Shifa overriden base:", shifa);

// Inheritance
class InformalPerson extends PersonClass {
  constructor(firstname, lastname) {
    // invokes the constructor of base class
    super(firstname, lastname);
  }

  //   Override
  greet() {
    return `Hello ${this.firstname}`;
  }
}

var althaf = new InformalPerson("Althaf", "Subiar");
console.log("Extended Person:", althaf);
console.log("Prototype of Extended Person:", althaf.__proto__);
console.log("Extended Person:", althaf.greet());
