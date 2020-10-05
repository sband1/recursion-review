// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// inputs: target class name, string version
// output: an array of elements that have the target class name
var getElementsByClassName = function(className) {
  var result = [];
  var hasTargetClass = function(element) {
    // if input element contains targetClassName
    //   push the element into the result array
    // iterate over the input element's children
    //   run each child thru hasTargetClass
  };
  hasTargetClass(document.body);
  return result;
};


