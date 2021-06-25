// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// v1:
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  const minL = Math.min(...strs.map((s) => s.length));
  if (!minL) return "";

  let pubStr = strs[0].slice(0, minL);

  while (!strs.every((s) => s.startsWith(pubStr))) {
    pubStr = pubStr.slice(0, pubStr.length - 1);
  }
  return pubStr;
};

console.log(
  "longestCommonPrefix: ",
  longestCommonPrefix(["flower", "flow", "flight"])
); // => fl
