class Solution {
public:
    vector<vector<int>> res;
    vector<int> nums;

    vector<vector<int>> permute(vector<int>& nums) {
        this->nums = nums;
        vector<int> state;
        vector<bool> bstate(nums.size(), false);
        foo(0, state, bstate);

        return res;
    }

    void foo(int idx, vector<int>& state, vector<bool>& bstate) {
        if(idx == nums.size()) {
            res.push_back(state);
            return;
        }

        for(int i = 0; i < nums.size(); i++) {
            int n = nums[i];

            if(!bstate[i]) {
                state.push_back(n);
                bstate[i] = true;
                foo(idx + 1, state, bstate);
                bstate[i] = false;
                state.pop_back();
            }
        }
    }
};
