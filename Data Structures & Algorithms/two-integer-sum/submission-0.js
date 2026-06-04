class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ij= [0,0]

        nums.map((num1, i)=>{
            nums.map((num2, j)=>{
                if (num1 + num2 === target && i !=j)
                {
                    if ( i<j ){
                        ij[0]=i
                        ij[1]=j
                    } else {
                        ij[0]=j
                        ij[1]=i
                    }

                }
            })
        })

        return ij
    }
}
