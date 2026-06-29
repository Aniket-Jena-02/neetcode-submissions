class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen: set[int] = set()

        for value in nums:
            if value in seen:
                return True
            seen.add(value)

        return False
