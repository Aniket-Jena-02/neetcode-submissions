class Solution {
public:
    vector<vector<int>> res;
  int target;
  vector<int> nums;

  vector<vector<int>> combinationSum(vector<int> &nums, int target) {
    this->nums = nums;
    this->target = target;
    vector<int> state;
    foo(0, 0, state);
    return res;
  }

  void foo(int currentSum, int idx, vector<int> &state) {
    if (currentSum == target) {
      res.push_back(state);
      return;
    }

    for (int i = idx; i < nums.size(); i++) {
      int n = nums[i];
      if (currentSum <= target) {
        state.push_back(n);
        foo(currentSum + n, i, state);
        state.pop_back();
      }
    }
  }


};
