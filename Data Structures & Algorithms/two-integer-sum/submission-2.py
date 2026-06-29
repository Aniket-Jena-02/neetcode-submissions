class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map: dict[int, int] = {}

        i = 0
        while i < len(nums):
            n = nums[i]
            if target - n in hash_map:
                return [hash_map[target - n], i]
            hash_map[n] = i

            i += 1

        return []


