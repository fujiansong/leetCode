// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// v1: 栈思路，将符号推进栈中，下一个符号和栈顶的符号匹配则推出栈，直到栈清空

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const symbolMap = {
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "[": "]",
    "]": "[",
  };

  const symbolLeft = ["(", "{", "["];

  const first = s[0];
  if (!symbolLeft.includes(first)) return false;
  const last = s[s.length - 1];
  if (symbolLeft.includes(last)) return false;

  let stack = [];
  s.split("").forEach((i) => {
    if (symbolLeft.includes(i)) {
      stack.unshift(i);
      return;
    }
    const [stackLast] = stack;
    const matchStr = symbolMap[i];
    if (matchStr === stackLast) {
      stack.shift();
    } else {
      stack.unshift(i);
    }
  });
  return !stack.length;
};

console.log("isValid: ", isValid("()")); // => true
console.log("isValid: ", isValid("()[]{}")); // => true
console.log("isValid: ", isValid("(]")); // => false
console.log("isValid: ", isValid("([)]")); // => false
console.log("isValid: ", isValid("{[]}")); // => true
console.log("isValid: ", isValid("(){}}{")); // => false
