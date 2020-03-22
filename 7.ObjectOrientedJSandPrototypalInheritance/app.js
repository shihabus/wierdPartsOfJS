var person = {
  firstname: "Default",
  lastname: "Default",
  getfullname: function() {
    return this.firstname + " " + this.lastname;
  }
};

var jhon = {
  firstname: "Jhon",
  lastname: "Doe"
};

jhon.__proto__ = person;
console.log(jhon.getfullname());

// this keyword by default refer to the object which
// make the call. If the particular property or method
// is not found in the parent Object, it will go and
// see the __proto__ property of parent Object. This continues
// until __proto__ is nill [PROTOTYPE CHAIN]

var jane = {
  firstname: "Jane"
};

jane.__proto__ = person;

console.log(jane.getfullname());

var arr = [];
var fn = function() {};
var obj = {};

console.log(arr.__proto__);
console.log(fn.__proto__);
console.log(obj.__proto__);
