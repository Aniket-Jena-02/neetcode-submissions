class Solution {
public:
    vector<vector<int>> res;
    vector<int> nums;

    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        this->nums = nums;
        sort(this->nums.begin(), this->nums.end());
        vector<int> state;

        foo(0, state);
        return res;
    }

    void foo(int idx, vector<int>& state) {
        if(idx == nums.size()) {
            res.push_back(state);
            return;
        }

        state.push_back(nums[idx]);
        foo(idx+1, state);
        state.pop_back();
        while(idx+1 < nums.size() && nums[idx] == nums[idx+1]) {
            idx++;
        }
        foo(idx+1, state);
    }
};
