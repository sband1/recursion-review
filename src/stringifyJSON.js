// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input: string, number, boolean, obj, array, func, null, undefined
// output: '"string"', "9", "true", "{}", "[]"
var stringifyJSON = function(input) {
  if ( typeof input === 'string' ) { return `"${input}"`; }
  if ( typeof input === 'number') { return `${input}`; }
  if ( typeof input === 'boolean') { return `${input}`; }
  if ( typeof input === 'undefined' || typeof input === 'function' ) { return; }
  if ( input === null ) { return `${input}`; }

  if ( Array.isArray(input) ) {
    var result = [];

    for ( var i = 0; i < input.length; i++ ) {
      result.push(stringifyJSON(input[i]));
    }

    return '[' + result.join(',') + ']';
  }

  if ( typeof input === 'object' ) {
    var result = [];

    for ( var key in input ) {
      if ( stringifyJSON(input[key] ) === undefined) { continue; }
      result.push( stringifyJSON(key) + ':' + stringifyJSON(input[key]));
    }

    return '{' + result.join(',') + '}';
  }

};
