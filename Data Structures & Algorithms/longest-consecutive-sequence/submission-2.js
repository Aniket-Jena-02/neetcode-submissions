class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          const set = new Set(nums)
  let currNum, currStreak, maxLength = 0

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      currNum = nums[i]
      currStreak = 1
      while (set.has(currNum + 1)) {
        currNum++
        currStreak++
      }
      maxLength = Math.max(maxLength, currStreak)
    }
  }
  return maxLength
    }
}
