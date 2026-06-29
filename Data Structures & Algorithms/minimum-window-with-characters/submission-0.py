class Solution:
    def minWindow(self, s: str, t: str) -> str:
        t_count = Counter(t)
        res = [-1, -1]
        resLen = float("infinity")
        i, j = 0, 0
        s_count = Counter()
        have, need = 0, len(t_count)

        while i < len(s):
            cha = s[i]
            s_count[cha] = s_count.get(cha, 0) + 1

            if cha in t_count and s_count[cha] == t_count[cha]:
                have += 1

            while have == need:
                if i - j + 1 < resLen:
                    res = [j, i]
                    resLen = i - j + 1
                
                s_count[s[j]] -= 1
                if s[j] in t_count and s_count[s[j]] < t_count[s[j]]:
                    have -= 1
                j += 1
            i += 1
        
        return s[res[0]: res[1]+1]

        