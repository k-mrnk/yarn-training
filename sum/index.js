'use strict';

/**
 * 数値の配列の合計を返す
 */
function add (nums) {
    let rslt = 0;
    for (const num of nums) {
        rslt += num;
    }
    return rslt;
}
/**
 * 数値の配列の全要素の積を返す
 * @param {数値の配列} nums 
 * @returns {全要素の積}
 */
function multi (nums) {
    let rslt = 1;
    for (const num of nums) {
        rslt *= num;
    }
    return rslt;
}

module.exports = {
    add: add,
    multi: multi,
};
