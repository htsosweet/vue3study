var maxArea = function(height) {
    let max = 0;
    let width = 1;
    while(width<height.length){

        for(let i=0;i<height.length;i+=width){
            if(height[i]>height[i+width]){
                max=Math.max(max,width*height[i+width]);
            }
            if(height[i]<=height[i+width]){
                max=Math.max(max,width*height[i]);
            }

        }
        width++;
    }
    return max;
};
//服了只能想到这种,还tm超时

var maxArea = function(height) {
    if (height.length < 2) {
        return 0;
    }
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let h = Math.min(height[left], height[right]);
        max = Math.max(max, h * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};
