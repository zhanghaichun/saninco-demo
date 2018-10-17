/*
获取一个数组中的索引放到一个新的数组中

不使用 Object.keys(); 方法， 因为这个方法会将索引转换为字符串
 */

/**
 * 返回对象数组中每个元素的索引。
 * @param  {[Array]} objArray   [一个对象数组]
 * @param  {[Array]} indexArray [一个数字数组， 包含的是对象数组的索引]
 */
export function getArrayIndexs(objArray, indexArray) {

    objArray.forEach( (value, index) => {
        indexArray.push(index);
    } );

}