class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapper = new Map()
        nums.map((num,i)=>mapper.set(num,0))

        return mapper.size !== nums.length
    }
}
