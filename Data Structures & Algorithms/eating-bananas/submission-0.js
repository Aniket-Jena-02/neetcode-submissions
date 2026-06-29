class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles)
        let res = Infinity

        while(l <= r) {
            const k = Math.floor((l + r) / 2)

            let totalTime = 0
            for(let pile of piles) {
                let currentTime = Math.ceil(pile / k)
                totalTime += currentTime
            }

            console.log(totalTime)

            if(totalTime > h) {
                l = k + 1
            } else if(totalTime <= h) {
                r = k - 1
                res = Math.min(res, k)
            }
        }

        return res

    }
}
