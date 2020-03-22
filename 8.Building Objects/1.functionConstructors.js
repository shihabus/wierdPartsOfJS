function Person(firstname) {
  // A brand new empty Object is created
  // and set as the 'this' keyword
  console.log("this", this);

  this.firstname = firstname;
  this.lastname = "US";

  // Separate copy of getFormalName() is created
  // with each new Object creation.
  this.getFormalName = function() {
    return `${this.lastname},${this.firstname}`;
  };

  console.log("this at the end", this);

  //   the new Object is returned by default
  //   unless an Object is being returned
  //   explicitly
  return "marshal"; // no effect

  // this will be returned as this
  // one is an Object
  return {
    name: "Boyakah"
  };
}

// With 'new' keyword added in front of the function
// invocation, the execution context gets created with
// 'this' keyword referring to a brand new Object.

// Similar to functions, Function Constructors
// can also accept parameters
var shihab = new Person("Shihab");

console.log("shihab", shihab);

console.log("prototype of Person", Person.prototype);

// Only a single method is created and
// all the Objects getting created will have
// access to this method. This helps in reducing and
// saving memory space. If the getFulllName method
// was created inside the function, that will end up
// in creating separate methods for each new Objects.
Person.prototype.getFullName = function() {
  return this.firstname + " " + this.lastname;
};

var shifa = new Person("Shifa");

console.log("shifa", shifa);
