class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> hm;
        hm['}'] = '{';
        hm[')'] = '(';
        hm[']'] = '[';

        for(auto c:s) {
            if(c == '[' || c == '{' || c == '(') {
                st.push(c);
            } else {
                if(st.empty() || st.top() != hm[c]) {
                    return false;
                }
                st.pop();
            } 
        }

        return st.empty();
    }
};
