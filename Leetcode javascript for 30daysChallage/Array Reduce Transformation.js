/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let Ans= init;
    for (let i of nums)
    Ans=fn(Ans,i);
    return Ans;
};