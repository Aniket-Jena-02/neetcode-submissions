"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        hm = {}
        def cln(node):
            if node in hm:
                return hm[node]
            copy = Node(node.val)
            hm[node] = copy
            for n in node.neighbors:
                copy.neighbors.append(cln(n))
            return copy

        return cln(node) if node else None


    

        