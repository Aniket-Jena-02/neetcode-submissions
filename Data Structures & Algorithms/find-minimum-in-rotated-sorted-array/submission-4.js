class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1, min = nums[0]

        while(l <= r) {
            if(nums[l] < nums[r]) {
                min = Math.min(min, nums[l])
                break
            }

            let mid = Math.floor((l + r) / 2)
            min = Math.min(min, nums[mid])


            if(nums[l] <= nums[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return min
    }
}
