class Solution {
public:
      vector<int> nums;
  vector<vector<int>> res;

  vector<vector<int>> subsets(vector<int>& nums) {
    this->nums = nums;
    vector<int> state;

    this->dfs(state, 0);

    return this->res;
  }

  void dfs(vector<int>& state, int i) {
    if (i == this->nums.size()) {
      auto copy = vector(state);
      this->res.push_back(copy);
      return;
    }

    state.push_back(this->nums[i]);
    dfs(state, i+1);
    state.pop_back();
    dfs(state, i+1);
  }

};
