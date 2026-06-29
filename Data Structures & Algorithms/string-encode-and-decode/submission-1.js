class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let delimiter = "~^"
  let result = ""
  for (let word of strs) {
    result = result.concat(word + delimiter)
  }
  return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
          let delimiter = "~^"
  let words = []
  let j = 0
  for (let i = 0; i < str.length; i++) {
    let word = ""
    if (str[i] === delimiter[0] && str[i + 1] === delimiter[1]) {
      while (j < i) {
        word = word.concat(str[j])
        j++
      }
      i++
      j = i + 1
      words.push(word)
    }
  }

  return words
    }
}
