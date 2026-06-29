class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1

        while (j > i) {
            const sum = numbers[i] + numbers[j]

            if (sum === target) {
                return [i+1, j+1]
            } else if (sum < target) {
                i++
            } else if (sum > target) {
                j--
            }
        }

        return []
    }
}
