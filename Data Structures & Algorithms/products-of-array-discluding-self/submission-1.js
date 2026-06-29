class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          let result = [], temp = 1

  for (let i = 0; i < nums.length; i++) {
    result.push(temp)
    temp *= nums[i]
  }

  temp = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= temp
    temp *= nums[i]
  }

  return result
    }
}
