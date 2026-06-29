class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
  int pref = 1;
  vector<int> pref_arr(nums.size());
  for (int i = 0; i < nums.size(); i++) {
    pref_arr[i] = pref;
    pref *= nums[i];
  }

  pref = 1;
  vector<int> result_arr(nums.size());
  for (int j = nums.size() - 1; j >= 0; j--) {
    result_arr[j] = pref * pref_arr[j];
    pref *= nums[j];
  }

  return result_arr;

    }
};
