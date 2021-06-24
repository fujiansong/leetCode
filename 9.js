// 9. 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// v1: 和7题一样利用数组反转
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let reverseResult = x.toString().split("").reverse().join("");
  return x.toString() === reverseResult;
};

console.log("isPalindrome:", isPalindrome(121)); // => true
console.log("isPalindrome:", isPalindrome(-121)); // => false  -121 121-
console.log("isPalindrome:", isPalindrome(10)); // => false
