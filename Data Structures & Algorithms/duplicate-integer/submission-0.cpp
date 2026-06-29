class Solution {
public:
    
bool hasDuplicate(vector<int> &nums) {
  unordered_set<int> hs;

  for (auto n : nums) {
    if (hs.find(n) != hs.end()) {
      return true;
    }
    hs.insert(n);
  }
  return false;
}


};
