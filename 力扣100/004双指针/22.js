
var moveZeroes = function(nums) {
    let firstzeroIndex = 0
    if(nums.length<=1){
        return nums
    }
    //快指针遍历所有数组,确定0的位置
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !==0){
            nums[firstzeroIndex] = nums[index];
            firstzeroIndex++;
        }
    }
    //补0
    for (let index = firstzeroIndex; index < nums.length; index++) {
        nums[index] = 0
    }
    //双指针,快指针index,firstzeroIndex慢指针


    return nums
};

moveZeroes([0,1,0,3,12])

