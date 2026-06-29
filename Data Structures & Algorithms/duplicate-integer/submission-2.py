class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash_map:dict[int, bool] = {}

        for value in nums:
            if hash_map.get(value):
                return True
            hash_map[value] = True

        return False
