class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1_count = Counter(s1)
        window_count = Counter()

        k = len(s1)
        n = len(s2)

        for i in range(n):
            window_count[s2[i]] += 1
            if i >= k:
                character = s2[i - k]
                if window_count[character] == 1:
                    del window_count[character]
                else:
                    window_count[character] -= 1
            
            if s1_count == window_count:
                return True

        return False