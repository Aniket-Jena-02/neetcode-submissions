class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          const map = new Map()
  strs.forEach((str) => {
    let sortedStr = str.split("").sort().join()
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [str])
    } else {
      map.set(sortedStr, [...map.get(sortedStr), str])
    }
  })

  let res = []
  map.forEach((v, k) => {
    res.push(v)
  })

  return res
    }
}
