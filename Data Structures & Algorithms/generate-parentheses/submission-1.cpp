class Solution {
public:
    public:
  vector<string> res;
  int n;
  vector<string> generateParenthesis(int n) {
    this->n = n;
    this->gen("", 0, 0);
    return res;
  }

  void gen(string str, int open, int close) {
    if (open == n && close == n) {
      this->res.push_back(str);
      return;
    }

    if (open < n) {
      gen(str + "(", open + 1, close);
    }
    if (close < open) {
      gen(str + ")", open, close + 1);
    }
  }

};
