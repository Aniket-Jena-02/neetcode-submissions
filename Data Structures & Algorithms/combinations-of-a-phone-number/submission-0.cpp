class Solution {
public:
    unordered_map<char, vector<char>> hm = {
        {'2', {'a', 'b', 'c'}},
        {'3', {'d', 'e', 'f'}},
        {'4', {'g', 'h', 'i'}},
        {'5', {'j', 'k', 'l'}},
        {'6', {'m', 'n', 'o'}},
        {'7', {'p', 'q', 'r', 's'}},
        {'8', {'t', 'u', 'v'}},
        {'9', {'w', 'x', 'y', 'z'}},
    };
    string digits;
    vector<string> res;

    vector<string> letterCombinations(string digits) {
        if(digits == "") {
            return res;
        }
        this->digits = digits;
        string state = "";

        foo(0, state);
        return res;
    }

    void foo(int idx, string& state) {
        if(idx == digits.length()) {
            res.push_back(state);
            return;
        }

        auto arr = hm[digits[idx]];
        for(int j = 0; j < arr.size(); j++) {
            state += arr[j];
            foo(idx+1, state);
            state.pop_back();
        }
    }
};
