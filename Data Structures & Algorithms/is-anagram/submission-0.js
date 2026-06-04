class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const mapper = new Map()

        // s.map((sItem)=> mapper.set(sItem,0))
         for (let i = 0; i < s.length; i++){
            mapper.set(s[i],0)
        }

        for (let i = 0; i < s.length; i++){
            mapper.set(s[i],mapper.get( s[i] ) + 1 )
            mapper.set(t[i],mapper.get( t[i] ?? 0) - 1)
        }

        let check = true
        mapper.forEach((value, key)=>{
            if (value !== 0) check = false
        })

        return check

    }
}
