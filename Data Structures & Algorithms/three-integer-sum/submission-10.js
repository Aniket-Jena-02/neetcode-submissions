class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let l = i + 1
        let r = n - 1
        let target = -nums[i]

        while (l < r) {
            const currentSum = nums[l] + nums[r];

            if (currentSum < target) {
                l++
            } else if (currentSum > target) {
                r--
            } else {
                res.push([nums[i], nums[l], nums[r]]);

                while (l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--
                }

                l++
                r--
            }
        }
    }

    return res
}
}
