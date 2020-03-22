function greet(whatToSay) {
  return function sayGreet(name) {
    console.log(`${whatToSay} ${name}`);
  };
}

var greetHi = greet("Hi");
greetHi("Shihab");

// Line 7: The function greet() is executed
// and is popped out
// of the Execution Stack

// Line 8: The whatToSay variable associated
// with outer greet() is still lingering around
// making it available inside sayGreet()

// This is what called Closure
// ---------------------------------------------------
function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}
var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// NOTE:
// In lines 23 and 24, the function is
// not at all getting invoked. The
// function object is being created and
// getting pushed to the arr.

// It is actually in lines 31-33, the
// created functions are getting invoked.
// During invocation, they print the
// CURRENT value of i which is 3, as
// the for loop has already run.
// ---------------------------------------------------
function buildFunctions1() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}
var fs1 = buildFunctions1();

fs1[0](); // 0
fs1[1](); // 1
fs1[2](); // 2

// When using let, different instances of
// i is created during each iteration. As these
// instances would be stored in different memory
// locations, the reference to i for each
// function object is different.
// ---------------------------------------------------
function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}
var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2

// With the help of IIFEs we create different execution
// contexts for each fs2. As closures are by reference,
// each values of i are instinct and unique for each
// fs2.
// ---------------------------------------------------
function withSetTimeOut() {
  console.log("two");
  var num = "three";
  setTimeout(function() {
    console.log(num);
  }, 1);
  console.log("four");
}
console.log("one");
withSetTimeOut();
console.log("five");

// callbacks are example for closure
// Even after the withSetTimeOut() is executed
// and popper out of Execution Stack, the property
// num stays around and is accessible to the
// setTimeout's callback.
// ---------------------------------------------------
