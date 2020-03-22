var person = {
  firstname: "Shihab",
  lastname: "Subair",
  getfullname: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};
// ---------------------------------

function logNamesTampered() {
  console.log(this.person.getfullname());
}

logNamesTampered();

// ---------------------------------

function logNames(gender, age) {
  console.log(`${this.getfullname()} is a ${gender} of age ${age}`);
}

logNames.apply(person, ["Male", "25"]);
logNames.call(person, "Male", "25");

var withPerson = logNames.bind(person, "Male", "25");
withPerson();

// ---------------------------------

var shifa = {
  firstname: "Shifa",
  lastname: "Anwar"
};

var logShifa = person.getfullname.apply(shifa);
console.log(logShifa);

// FUNCTION BORROWING:
// the object don't have the getfullname method
// so it borrows the function from person object
// this can be thought of the initial step of INHERITANCE

// ---------------------------------

function multiply(a, b) {
  return a * b;
}
var multiplyBy2 = multiply.bind(this, 2);
var multiplyBy3_4 = multiply.bind(this, 3, 4);

console.log(multiplyBy2(4));
console.log(multiplyBy3_4(5));

// FUNCTION CURRYING
// using bind we can preset the parameters of function
// here the object reference is of least important thus we are
// pass the this
