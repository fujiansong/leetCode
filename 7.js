// 7. 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

// v1: 转成数组直接反转

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (x === 0) return 0;

  let result = parseInt(x.toString().split("").reverse().join(""));

  if (x < 0) result = -result;

  return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
};

console.log("reverse:", reverse(123)); // => 321
console.log("reverse:", reverse(-123)); // => -321
console.log("reverse:", reverse(-210)); // => -12
console.log("reverse:", reverse(210)); // => 12
console.log("reverse:", reverse(0)); // => 0
