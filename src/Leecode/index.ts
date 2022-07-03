/**
 * @chelizichen Leecode 面试前临时抱佛脚
 */
/**
 * @important 二分查找 排序后的数组
 * @param {arr} number[]
 * @param {num} num
 * @returns index of Val -1?index
 */

const search = (arr:number[],num:number) => {
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
        }else if(arr[mid] == num){
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


/**
 * @filterObj
 *  es6方法过滤掉两个数组中对象id值相等的项
 */


const filterObj =<T extends {id : number}>(ojb1:Array<T>,obj2:Array<T>)=>{
    return ojb1.filter(item=>{
        return !obj2.some(el=>{
            return el.id === item.id
        })
    })
}

const obj1 = [{id:1,name:'lee'},{id:3,name:'clock'}]
const obj2 = [{id:1,name:'clock'},{id:3,name:'clock'}]
const obj3 = filterObj(obj1,obj2)


/**
 * 字符串abccba，从前往后读是a-b-c-c-b-a；从后往前读也是a-b-c-c-b-a
 */
function reserve1(str:string){
    return str == str.split('').reverse().join('')
}
function reserve2(str:string){
    var len = str.length;
    for(var i=0;i<len-1;i++){
        if(str.charAt(i)==str.charAt(len-1-i)){
            return true;
        }else{
            return false;
        }
    }   
}
// console.log(reserve2('abac'))

/**
 * @冒泡排序
 */

function Bubbling(array:number[]){
    for(let i = 0;i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[j-1]>array[j]){
                let temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            }
        }
    }
}

/**
 * @统计一段字符串中出现次数最多的
 * @param { str:string }
 * @returns {num:number,str:string}
 */

const searchMostStr =(str:string):{num:number,mostStr:string}=>{
    let strObj:Record<string,number> = {}
    const strArr = [...str]
    for(let key of strArr){
        if(strObj[key]){
            strObj[key]++
        }else{
            strObj[key] = 1
        }
    }
    const objArr = Object.entries(strObj)
    objArr.sort((a,b)=>{
        return b[1]-a[1]
    })
    const mostStrArr = objArr[0]
    const num = mostStrArr[1]
    const mostStr:string  = mostStrArr[0]
    
    return{
        num,
        mostStr
    }
}

/**
 * @param {args:Array<any>}
 * @returns args
 * @数组去掉Null和Undefined 值
 */
const filterNull = (args:Array<any>) =>{
    return args.filter(el=>el)
}

/**
 * @mehods reserve
 */

const reserve = (str:string) =>{
    for(let i=0;i<str.length/2;i++){
        let temp = [...str][i];
        [...str][i] = [...str][str.length-i];
        [...str][str.length-i] = temp;
    }
    return str
} 

/**
 * @methods paramsToObject
 * @params  string 
 * @return  object Record<string,any>
 */

function planToObject(str:string){
    const ret:Record<string,any> = {}
    const obj = str.split("&")
    obj.forEach(el=>{
        const currRet = el.split("=")
        ret[currRet[0]] = currRet[1]
    })
    return ret
}

/**
 * @method reverse
 * @param @return string
 */
function reverse(str:string):string{
    const strArray = [...str]
    for(let i=0;i<(str.length-1)/2;i++){
        let temp = strArray[i];
        strArray[i] = strArray[str.length-i];
        strArray[str.length-i] = temp;
    }
    return strArray.join('')
} 
/**
 * @method reverse1
 * @param string
 * @return string
 */
function reverse1(str:string):string{
    if(!str){
        return ''
    }
    if(str.length ===1){
        return str
    }
    let end = str.length - 1;
    return str[end] + reverse1(str.slice(1,end)) + str[0]
}

/**
 * @method factorila
 * @param num 
 * @return num
 */
function factorila(num:number):number{
    if(num === 1 || num === 0){
        return 1
    }
    return num * factorila(num-1)
}
/**
 * @method 查找单词
 */
function findWords(str:string){
    const strArr = str.split(' ')
    const newarr = strArr.filter(el=>{
        return el.length > 1
    })
    return newarr
}

/**
 * @method 查询句子中单词最长的
 */

function findWordsMostLength(str:string){
    const strArr = str.split(' ')
    let currMost = strArr[0]
    strArr.forEach(el=>{
        if(el.length > currMost.length){
            currMost = el
        }
    })
    return currMost.length
}
function findWordsMostLength1(str:string){
    return str.split(' ').map(el=>el.length).sort().reverse()[0]
}
function findWordsMostLength2(str:string){
    return Math.max.apply(null,(str.split(' ').map(el=>el.length)))
}

/**
 * @method endwith
 */
function endWith(target:string,end:string){
    return [...target].splice(target.length-end.length,target.length-1).join('') === end
}