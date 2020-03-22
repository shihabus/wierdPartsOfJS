function c() {
  // alert: SCOPE CHAIN
  console.log("c invoked", myvar);
}

function b() {
  var myvar = "I am b var";
  console.log("b invoked", this.myvar, "|", myvar);
  c();
  function d() {
    //   Execution context of b() is the outer environment
    console.log("d invoked", myvar);
  }
  d();
}

function a() {
  var myvar = "I am a var";
  console.log("a invoked", this.myvar, "|", myvar);
  b();
}

var myvar = "I am Global var";
console.log("Global b4 invocation", this.myvar, "|", myvar);
a();
console.log("Global after invocation", this.myvar, "|", myvar);
