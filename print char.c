#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    string str;
    cin >> str;

    vector<pair<char, int>> v;

    for (char ch : str) {
        if (ch >= 'a' && ch <= 'z') {
            v.push_back(make_pair(ch, 0));
        } else {
            int pi = v.size() - 1;
            int count = v[pi].second * 10 + (ch - '0');
            v[pi].second = count;
        }
    }

    for (auto const& [ch, rpt] : v) {
        int count = (rpt == 0) ? 1 : rpt;
        while (count--) {
            cout << ch;
        }
    }

    return 0;
}
