class MinStack {
public:
    stack<int> st;
    stack<int> mi;
    MinStack() {
        
    }
    
    void push(int val) {
        st.push(val);
        if(mi.empty()) {
            mi.push(val);
        } else {
            int top = mi.top();
            mi.push(min(top, val));
        }
    }
    
    void pop() {
        mi.pop();
        st.pop();
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return mi.top();
    }
};
