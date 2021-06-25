// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// v1
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const lastStr = s.split(" ").filter((i) => i);

  return lastStr?.length ? lastStr.pop().length : 0;
};

console.log("lengthOfLastWord: ", lengthOfLastWord("Hello World")); // => 5
console.log("lengthOfLastWord: ", lengthOfLastWord(" ")); // => 0
console.log("lengthOfLastWord: ", lengthOfLastWord("a ")); // => 0
