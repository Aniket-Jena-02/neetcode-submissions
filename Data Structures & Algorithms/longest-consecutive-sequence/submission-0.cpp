class Solution {
public:
    int longestConsecutive(vector<int> &nums) {
  if (nums.empty()) {
    return 0;
  }

  unordered_set<int> hs;
  int res = 0;

  for (auto &&v : nums) {
    hs.insert(v);
  }

  for (auto &&v : nums) {
    // found
    if (hs.find(v - 1) != hs.end()) {

    }
    // not found
    else {
      int current_streak = 1, current_num = v;

      while (hs.find(current_num + 1) != hs.end()) {
        current_streak++;
        current_num++;
      }

      res = max(res, current_streak);
    }
  }

  return res;
}

};
