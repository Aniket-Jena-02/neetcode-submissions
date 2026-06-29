class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = []
        for n in stones:
            heapq.heappush(heap, -n)
        while len(heap) > 1:
            one = -heapq.heappop(heap)
            two = -heapq.heappop(heap)
            if one > two:
                heapq.heappush(heap, -(one - two))
            elif two > one:
                heapq.heappush(heap, -(two - one))
        return -heap[0] if heap else 0

