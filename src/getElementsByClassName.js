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
    if ( element.classList !== undefined && element.classList.contains(className) ) {
      result.push(element);
    }

    for ( var i = 0; i < element.childNodes.length; i++ ) {
      hasTargetClass(element.childNodes[i]);
    }

  };
  hasTargetClass(document.body);
  return result;
};


