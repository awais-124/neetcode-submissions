public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> numMap = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];

            if (numMap.TryGetValue(
                complement, out int complementIndex)
            )  {
                return new int[] { complementIndex, i };
            }

            numMap[nums[i]] = i; 
        }

        return new int[0];
    }
}
