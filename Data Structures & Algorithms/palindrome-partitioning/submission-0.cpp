class Solution {
public:
    string s;
    vector<vector<string>> res;

    vector<vector<string>> partition(string s) {
        this->s = s;
        vector<string> state;
        foo(state, 0);
        return res;
    }

    void foo(vector<string> &state, int idx) {
        if(idx == s.length()) {
            res.push_back(state);
            return;
        }

        for(int i = idx; i < s.length(); i++) {
            string sub = s.substr(idx, i - idx + 1);

            if(check(idx, i)) {
                state.push_back(sub);
                foo(state, i + 1);
                state.pop_back();
            }
        }


    }

    bool check(int i, int j) {
        while(i <= j) {
            if(s[i] != s[j]) return false;
            i++;
            j--;
        }

        return true;
    }
};
