class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length
        const cars = []
        for(let i = 0; i < n; i++) {
            cars.push({pos: position[i], spd: speed[i]})
        } 
        cars.sort((a, b) => b.pos - a.pos)

        let fleets= 0
        let lastFleetTime = Number.NEGATIVE_INFINITY

        for(const c of cars) {
            const t = (target - c.pos) / c.spd
            if(t > lastFleetTime) {
                fleets++
                lastFleetTime = t
            }
        }

        return fleets
    }
}
