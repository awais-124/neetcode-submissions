public class Solution {
    public bool hasDuplicate(int[] nums) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        foreach(int num in nums) {
            map[num] = 0;
        }

        foreach(int num in nums) {
            if (map[num] == 1) { return true; }
            map[num]=1; 
        }

        return false;
    }
}