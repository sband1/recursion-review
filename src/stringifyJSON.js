// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input: string, number, boolean, obj, array, func, null, undefined
// output: '"string"', "9", "true", "{}", "[]"
var stringifyJSON = function(input) {
  if ( typeof input === 'string' ) { return `"${input}"`; }
  if ( typeof input === 'number') { return `"${input}"`; }
  if ( typeof input === 'boolean') { return `"${input}"`; }
  if ( typeof input === 'undefined' || typeof input === 'function' ) { return; }
  if ( input === null ) { return `"${input}"`; }

  // if array
  //   create empty array var
  //   iterate through input array
  //     arr.push (recursion(input))
  //   return join the array with commas and surrond by brackets

  // if obj
  //   create empty array var
  //   iterate through the input obj
  //      if recursion(obj[key]) is undefined
  //        continue
  //      arr.push recursion(key) concat ":" concat recursion(obj[key])
  //   return join the array with commas and surrond by curly braces

};
