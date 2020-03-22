var a = new Number("3");
console.log(a);
// type:Object
// The value gets placed inside the [[PrimitiveValue]]
// of function Number

b = 3;
console.log(b.toFixed(2));
// b is able to access toFixed() method as
// the compiler automatically places 3 inside
// the [[PrimitiveValue]] property of Number()

console.log(a == b); // true, as both values are coerced and are same
console.log(a === b); // false, as b is an Object and a is a primitive.
