class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
          unordered_map<int, int> hm;
  for (int i = 0; i < nums.size(); i++) {
    if (hm.find(target - nums[i]) != hm.end()) {
      auto res = vector<int>{i, hm[target - nums[i]]};
      sort(res.begin(), res.end());
      return res;
    }
    hm[nums[i]] = i;
  }
  return vector<int>{};

    }
};
