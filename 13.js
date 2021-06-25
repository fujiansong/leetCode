// 13. 罗马数字转整数

// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 特殊规则
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// v1: 用对象映射

/**
 * @param {string} s
 * @return {number}
 */
const RomanStrMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = (s) => {
  const specialMap = { I: ["V", "X"], X: ["L", "C"], C: ["D", "M"] };
  return s
    .split("")
    .map((r, i) => {
      if (Object.keys(specialMap).includes(r)) {
        return specialMap[r].includes(s[i + 1])
          ? -RomanStrMap[r]
          : RomanStrMap[r];
      }
      return RomanStrMap[r];
    })
    .reduce((t, v) => t + v, 0);
};

console.log("romanToInt: ", romanToInt("IV")); // => 4
console.log("romanToInt: ", romanToInt("IX")); // => 9
console.log("romanToInt: ", romanToInt("LVIII")); // => 58
console.log("romanToInt: ", romanToInt("MCMXCIV")); // => 1994
console.log("romanToInt: ", romanToInt("IXLVIII")); // => 47
console.log("romanToInt: ", romanToInt("IXL")); // => 47
