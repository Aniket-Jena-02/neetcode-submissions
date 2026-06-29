class Solution {
    // a = 97
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

    let i = 0;
    let j = 0;
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let k = 0; k < s1.length; k++) {
        arr1[s1.charCodeAt(k) - 97] += 1;
    }

    const matches = (a, b) => {
        for (let k = 0; k < 26; k++) {
            if (a[k] !== b[k]) return false;
        }
        return true;
    };

    while (j < s2.length) {
        arr2[s2.charCodeAt(j) - 97] += 1;

        if (j - i + 1 === s1.length) {
            if (matches(arr1, arr2)) return true;
        }

        if (j - i + 1 >= s1.length) {
            arr2[s2.charCodeAt(i) - 97] -= 1;
            i++;
        }

        j++;
    }

    return false;
    }
}
