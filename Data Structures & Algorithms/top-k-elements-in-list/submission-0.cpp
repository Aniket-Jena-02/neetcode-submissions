class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
          unordered_map<int, int> hm;
  vector<int> result;
  for (auto num : nums) {
    hm[num]++;
  }

  vector<pair<int, int>> sorted(hm.begin(), hm.end());
  sort(sorted.begin(), sorted.end(),
       [](const auto &a, const auto &b) { return a.second > b.second; });

  for (auto [key, val] : sorted) {
    if (k > 0) {
      result.push_back(key);
      k--;
    }
  }
  return result;

    }
};
