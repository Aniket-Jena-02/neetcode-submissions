class Solution {
public:

    string delimiter = "~^";

string encode(vector<string> &strs) {
  string result;
  for (auto &word : strs) {
    result.append(word + delimiter);
  }
  return result;
}

vector<string> decode(string s) {
  vector<string> result;
  int i = 0;
  int j = 0;
  for (; i < s.length(); i++) {
    string str = "";
    if (i + 1 <= s.length() && s[i] == delimiter[0] &&
        s[i + 1] == delimiter[1]) {
      for (; j < i; j++) {
        str += s[j];
      }
      j = i + 2;
      result.push_back(str);
    }
  }
  return result;
}

};
