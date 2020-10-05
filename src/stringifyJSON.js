// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input: string, number, boolean, obj, array, func, null, undefined
// output: '"string"', "9", "true", "{}", "[]"
var stringifyJSON = function(input) {
// If this is string
// return double quoted string
  if (typeof input === 'string') { return `"${input}"`; }
  // if number
  // return string number
  // if boolean
  // return string version
  // if nulll
  // return string null
  // if undefined
  // return
  // if func
  // return

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
