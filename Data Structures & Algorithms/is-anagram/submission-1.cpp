class Solution {
public:
    bool isAnagram(string s, string t) {
         unordered_map<char, int> hm;
  unordered_map<char, int> hn;

  for (auto c : s) {
    hm[c]++;
  }

  for (auto c : t) {
    hn[c]++;
  }

  for (auto c : t) {
    if (hm[c] != hn[c] || hm.size() != hn.size()) {
      return false;
    }
  }

  return true;
 
    }
};
