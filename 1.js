// 1. 两数之和

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 第一版 暴力循环
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let isFind = false;
    const start = nums[i];
    result[0] = i;
    for (let j = i + 1; j < nums.length; j++) {
      const end = nums[j];

      if (start + end === target) {
        isFind = true;
        result[1] = j;
      } else {
      }
    }
    if (!isFind) result = [];
    if (isFind) break;
  }
  return result;
};

console.log("result: ", twoSum([2, 7, 11, 15], 18));

// 第二版  target减去当前元素，然后在剩余元素中查找是否有相同值
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumV2 = function (nums, target) {
  let result = [];
  nums.forEach((num, i) => {
    const otherValue = target - num;
    const othernums = nums.slice(i + 1);
    const findIndex = othernums.findIndex((n) => n === otherValue);

    const otherIndex = i + 1 + findIndex;
    if (findIndex !== -1 && i !== otherIndex) result = [i, otherIndex];
  });
  return result;
};

// console.log("resultV2: ", twoSumV2([2, 7, 11, 15], 19)); // => []
// console.log("resultV2: ", twoSumV2([2, 7, 11, 15], 18)); // => [1,2]
// console.log("resultV2: ", twoSumV2([2, 7, 11, 15], 22)); // => [1,3]
console.log("resultV2: ", twoSumV2([3, 3], 6)); // => [0,1]
