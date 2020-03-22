var a;
function print() {
  // as we re declare a
  // its scope is reduced to print()
  a = 5;
  console.log("called print!");
  console.log("Inside print() a", a);
  var a = 10;
  console.log("Inside print() a", a);
}
console.log("Print a before print()", a);
print();
console.log("Print a after print()", a);
