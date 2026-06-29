class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hm = {}
        for n in nums:
            if n in hm:
                hm[n] += 1
            else:
                hm[n] = 1
        ss = dict(sorted(hm.items(), key=lambda x: x[1], reverse=True))
        return list(ss.keys())[:k]