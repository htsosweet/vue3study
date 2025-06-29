/**
 * @param {number[]} nums
 * @return {number}
 */
//哈哈写不来
// var longestConsecutive = function (nums) {
//     if (nums.length === 0) return 0;
//     let maxnum = 1
//     let newnums = nums.sort((a, b) => a - b)
//     for (let i = 0; i < newnums.length; i++) {
//         if ((newnums[i] - newnums[i + 1]) === -1) {
//             maxnum++
//         }
//     }
//     return maxnum
// };
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

if (nums.length === 0) return 0;
const newnums= new Set(nums)
let longestSteak=0
for(let num  of newnums){
    if(!newnums.has(num-1)){
        let currentnum=num
        let maxSteak=1
        while(newnums.has(currentnum + 1)){
            maxSteak+=1
            currentnum+=1
        }
        longestSteak = Math.max(longestSteak, maxSteak);

    }
}
return longestSteak