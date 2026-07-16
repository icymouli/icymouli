#include <iostream>
#include <algorithm>
using namespace std;
void solve(){
    int N; cin>>N;
    vector<int> arr(N),ans;
    for(int i=0;i<N;i++){
        cin>> arr[i];
    }
    sort(arr.begin(),arr.end());
    long long cf=0;
    for(int ctr=1;ctr<=arr[N-1];ctr++){
        auto it=lower_bound(arr.begin(),arr.end(),ctr);
        int count=arr.end()-it;
        cf+=count;
        ans.push_back(cf%10);
        cf/=10;
    }
    while(cf!=0){
        ans.push_back(cf%10);
        cf/=10;
    }
    reverse(ans.begin(),ans.end());
    for(int v:ans) cout<< v;
}
int main() {
    solve();

    return 0;
}
























































































