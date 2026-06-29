class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let x = 0, y = matrix.length - 1, z = matrix[0].length - 1
         
        while(x <= y) {
            let mid = Math.floor((x + y) / 2)

            let midL = matrix[mid][0], midR = matrix[mid][z]

            if(target > midR) {
                x = mid + 1
            } else if(target < midL) {
                y = mid - 1
            } else {
                return this.search(matrix[mid], target)
            }
        }

        return false
    }

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
                return true
            }
        }

        return false
    }
}
