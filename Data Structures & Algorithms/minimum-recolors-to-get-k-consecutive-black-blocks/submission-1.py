class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        white_count = 0

        for i in range(k):
            if blocks[i] == "W":
                white_count += 1
            
        res = white_count

        for i in range(k, len(blocks)):
            if blocks[i - k] == "W":
                white_count -= 1

            if blocks[i] == "W":
                white_count += 1
            
            res = min(res, white_count)

        return res



# return k - min(black_count, white_count)
        