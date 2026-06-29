class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        total = 0
        potential = [0] * len(customers)
        for i in range(0, len(customers)):
            if grumpy[i] == 1:
                potential[i] = customers[i]
            else:
                total += customers[i]
        
        current_sum = sum(potential[:minutes])
        max_sum = current_sum
        for i in range(minutes, len(potential)):
            current_sum += potential[i] - potential[i - minutes]
            max_sum = max(max_sum, current_sum) 

        return total + max_sum
        
        