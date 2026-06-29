class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1

        while(l <= r) {
            let mid = Math.floor((l + r) / 2)
            console.log({l,r})

            if(target > nums[mid]) {
                l = mid + 1
            } else if(target < nums[mid]) {
                r = mid - 1
            } else if(target == nums[mid]) {
                return mid
            }
        }

        return -1
    }
}
