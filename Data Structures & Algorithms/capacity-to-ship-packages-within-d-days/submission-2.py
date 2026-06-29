class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def helper(cap):
            curr = 0
            days_av = 1
            for w in weights:
                if curr + w <= cap:
                    curr += w
                else:
                    curr = w
                    days_av += 1
            return days_av
        left, right = max(weights), sum(weights)
        while left <= right:
            mid = left + (right - left) // 2
            d = helper(mid)
            if d <= days:
                right = mid - 1
            else:
                left = mid + 1
        
        return left