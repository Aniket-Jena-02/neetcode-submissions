class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        res = 0
        sum = 0
        i = 0
        while i < k:
            sum += arr[i]
            if i == k-1 and sum / k >= threshold:
                res += 1
            i += 1
        print(i)
        
        while i < len(arr):
            sum += arr[i]
            sum -= arr[i - k]
            if sum / k >= threshold:
                res += 1
            i += 1
        return res