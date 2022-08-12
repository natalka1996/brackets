module.exports = function check(str, bracketsConfig) {
  // your solution


  let stack = [];
  let brackets = {
    ')': '(',
    '}': '{',
    '[': ']'
  };
  for (let i = 0; i < str.length; i++){
    const current = str[i];

    if (isClosedBracket(current)) {
      if (brackets [current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}
function isClosedBracket(ch) {
  return [')', '}',].indexOf(ch) > -1;
}
