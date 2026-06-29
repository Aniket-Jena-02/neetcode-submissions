class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          const map = new Map()
  nums.forEach(n => {
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1)
  })

  let arr = []
  map.forEach((v, k) => {
    arr.push([k, v])
  })

  arr.sort((a, b) => b[1] - a[1])

  let res = []
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }

  console.log(res)
  return res
    }
}
