class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        diff = []
        for n in arr:
            diff.append((n, abs(n-x)))
        diff.sort(key=lambda a: a[1])
        res = []
        i = 0
        while i < k:
            res.append(diff[i][0])
            i += 1
        
        return sorted(res)