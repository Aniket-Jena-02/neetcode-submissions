class Solution {
public:
    vector<vector<int>> res;
    vector<int> nums;
    int target;

    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        this->nums = candidates;    
        this->target = target;
        sort(nums.begin(), nums.end());

        vector<int> state;
        foo(0, 0, state);

        return res;
    }

    void foo(int currentSum, int idx, vector<int>& state) {
        if(currentSum == target) {
            this->res.push_back(state);
            return;
        }

        for(int i = idx; i < nums.size(); i++) {
            int n = nums[i];
            if (i > idx && nums[i] == nums[i-1]) continue;
            if(currentSum <= target) {
                state.push_back(n);
                foo(currentSum + n, i + 1, state);
                state.pop_back();
            }
        }
    }
};
