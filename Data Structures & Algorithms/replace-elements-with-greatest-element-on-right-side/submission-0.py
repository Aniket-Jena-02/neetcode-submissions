class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr)
        g = -1 
        for i in range(n-1, -1, -1):
            curr = arr[i]
            arr[i] = g
            g = max(g, curr)
        
        return arr
