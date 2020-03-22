var arr1 = [1, 2, 3];

// CREATE DOUBLE
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr1);
console.log("Doubled array", arr2);

// Here we are trying to create double of arr
// this can be abstracted into a function like

function mapForEach(arr, fn) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

// CREATE DOUBLE
var arr3 = mapForEach(arr1, function(item) {
  return item * 2;
});
console.log("Doubled array", arr3);

// CHECK PAST LIMIT
var arr4 = [];
for (var i = 0; i < arr1.length; i++) {
  arr4.push(arr1[i] > 2);
}
console.log("Greater than 2", arr4);

var arr5 = mapForEach(arr1, function(item) {
  return item > 2;
});
console.log("Greater than 2", arr5);

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};

// The callback of mapForEach just takes one single argument
// the current item. But the checkPastLimit() is expecting
// 2 arguments, a limit and the item. So we are defaulting
// the limit by using bind.[FUNCTION CURRYING]
var arr6 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log("Greater than 2", arr6);

var checkPastLimitOf = function(limit) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limit);
};

var arr7 = mapForEach(arr1, checkPastLimitOf(2));
console.log("Greater than 2", arr7);
