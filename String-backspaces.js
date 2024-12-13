/*
Assume "#" is like a backspace in string. 
This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.

Examples:
  "abc#d##c"      ==>  "ac"
  "abc##d######"  ==>  ""
  "#######"       ==>  ""
  ""              ==>  ""
*/


// Solution

function clean_string(s) {
  const result = []
	for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}

// or

function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}