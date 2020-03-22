// this KEYWORD
function a() {
  console.log("Inside a", this);
  function b() {
    console.log("Inside b <-- a ", this);
  }
  b();
}
var funExp = function() {
  console.log("Inside funExp", this);
};

console.log("Global", this);
a();
funExp();

// OBSERVATION
// for all function invocations in Global level,
// this keyword refers the Global Object
console.log("-----------------------");

function logName() {
  console.log("The name", this.name);
}
var name = "Shihab";
logName();

var nameObj = {
  name: "Shifa",
  nameLogger: function() {
    console.log("The name Logger", this.name);
  }
};
logName.apply(nameObj);
nameObj.nameLogger();
nameObj.nameLogger.apply(this);

console.log("-----------------------");

var obj = {
  name: "The object obj",
  log: function() {
    console.log("Inside obj", this);
    function innerLog() {
      console.log("Inside innerLog <-- obj", this);
    }
    var innerLogFunExp = function() {
      console.log("Inside innerLogFunExp", this);
    };
    innerLog();
    innerLogFunExp();
  }
};

obj.log();
// OBSERVATION
// Within the methods of an Object
// this keyword refers the outer wrapping Object.
// But inside the function within these methods,
// this keyword is referring the Global Object.
console.log("-----------------------");

// SOLUTION 1:
// Explicitly assign this keyword
var obj1 = {
  name: "The object obj1",
  log: function() {
    var self = this;
    console.log("Inside obj1", self);
    function innerLog1() {
      console.log("Inside innerLog1 <-- obj1", self);
    }
    var innerLogFunExp1 = function() {
      console.log("Inside innerLogFunExp1", self);
    };
    innerLog1();
    innerLogFunExp1();
  }
};

obj1.log();
console.log("-----------------------");
