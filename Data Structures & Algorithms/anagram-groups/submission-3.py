class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hm = {}

        for s in strs:
            ss = "".join(sorted(s))
            if ss in hm:
                hm[ss].append(s)
            else:
                hm[ss] = [s]
        
        res = []
        for v in hm.values():
            res.append(v)
        
        return res

