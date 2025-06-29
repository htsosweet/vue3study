/**
 * @param {string[]} strs
 * @return {string[][]}
 */



strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function(strs) {
    const map = new Map();
    const result = [];  
    for(let i=0;i<strs.length;i++){
        let newstrskey= strs[i].split("").sort().join("");
        
        if(!map.has(newstrskey)){
            map.set(newstrskey,[])
        }
        map.get(newstrskey).push(strs[i])
    }
    for(let [key,value] of map){
        result.push(value)
    }  
    return result
};
groupAnagrams(strs)
console.log(groupAnagrams(strs)[0]);

