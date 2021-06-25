// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// v1: 
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let res = 0;
  let sub = "";

  s.split("").forEach((r) => {
    while (sub.includes(r)) {
      sub = sub.slice(1);
    }
    sub += r;
    res = Math.max(res, sub.length);
  });
  return res;
};

console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("abcabcbb")); // => 3
console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("bbbbb")); // => 1
console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("pwwkew")); // => 3
console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("")); // => 0
console.log("lengthOfLongestSubstring: ", lengthOfLongestSubstring("dvdf")); // => 2
