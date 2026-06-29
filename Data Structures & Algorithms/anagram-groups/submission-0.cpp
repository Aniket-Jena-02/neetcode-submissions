class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
          unordered_map<string, vector<string>> hm;
  for (auto word : strs) {
    auto sortedString = word;
    sort(sortedString.begin(), sortedString.end());
    hm[sortedString].push_back(word);
  }

  vector<vector<string>> result;
  for (auto [key, val] : hm) {
    result.push_back(val);
  }
  return result;

    }
};
