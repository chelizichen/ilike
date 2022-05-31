/**
 * @chelizichen Leecode 面试前临时抱佛脚
 */
/**
 * @important 二分查找 排序后的数组
 * @param {arr} number[]
 * @param {num} num
 * @returns index of Val -1?index
 */

 export const search = (arr:number[],num:number) => {
    let fir = 0;
    let las = arr.length-1;
    if(num>arr[las]){
        throw new Error("边界问题")
    }
    if(num == arr[las]){
        return las
    }
    let mid;
    while(1){
        mid = Math.floor((fir+las)/2)
        if(arr[mid]>num){
            las = mid
        }else if(arr[mid]<num){
            fir = mid
        }else if(arr[mid] = num){
            break;
        }
    }
    return mid
}

/**
 * @import 两数之和
 * @param [1,2,3,4,5,6,7,8,9]
 * @get 13
 */

const sumArr = [2,4,5,8,9]
const getSum=(arr : number[],num : number)=>{
    let ONX = 0;
    let INX = 0;
    while(1){
        let MINUS = num - arr[ONX]
        if( arr.indexOf(MINUS) != -1 ){
            INX = arr.indexOf(MINUS)
            break;
        }else{
            ONX++
        }
    } 
    return [ONX,INX]
}
const getSumTest = getSum(sumArr,13) // [1,4]