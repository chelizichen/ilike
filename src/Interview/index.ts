/**
 * @chelizichen 面试题
 */

/**
 * @冒泡排序
 */
export function Bubbling(array:number[]){
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
 * @深拷贝
 */
export function DeepClone(target:any){
    let currObj:any = null
    if(typeof target === "object" && typeof target !== null){
        currObj = target instanceof Array?[]:{}
        for(let k in target){
            currObj[k] = DeepClone(target[k])
        }
    }else{
        currObj = target
    }
    return currObj
}

/**
 * @数组去重
 * 去掉引用类型的 Array Object
*/
export function Unique(arr:any[]){            
    for(let i=0; i< arr.length; i++){
        for(let j= i+1; j< arr.length; j++){
            if( Object.prototype.toString.call(arr[i]) === "[object Array]" && Object.prototype.toString.call(arr[j]) === "[object Array]" ){
                if(JSON.stringify(arr[i] === JSON.stringify(arr[j]))){
                    arr.splice(j,1)
                    j--
                }
            }else if(Object.prototype.toString.call(arr[i]) === "[object Object]" && Object.prototype.toString.call(arr[j]) === "[object Object]" ){
                if(JSON.stringify(arr[i] === JSON.stringify(arr[j]))){
                    arr.splice(j,1)
                    j--
                }
            }else
            {
                if(arr[i]===arr[j]){
                    arr.splice(j,1);
                    j--
                }
            }
        }
    }
    return arr;
}

/**
 * @记忆缓存 
 * 保存执行结果 省略执行过程
 */
export function memorize(fn:Function){
    const cache:Record<string,any> = {}
    return (...args:any[])=>{
        const key:string = JSON.stringify(fn)
        if(cache[key]){
            return cache[key]
        }else{
            cache[key] = fn(args)
        }
    }
}

/**
 * @数组扁平化
 */
export function flattenDeep(arr:any[])
{
    return arr.flat(Infinity)
}
 
/**
 * @EventBus 发布-订阅
 * @EMIT (EventName:string,cb:Function)  发布出去
 * 
 */
export class EventBus{
    constructor(public cache:Record<string,Function> = {}){}
    EMIT(EventName:string,cb:Function):void{
        if(this.cache[EventName]) return
        else this.cache[EventName] = cb
    }
    ON(EventName:string):void{
        if(!this.cache[EventName]) throw new Error("消息不存在")
        else this.cache[EventName]()
    }
    OFF(EventName:string){
        delete this.cache[EventName]
    }
}

/**
 * @Sleep 同步Sleep 函数
 * @return void
 */
export function sleep(time:number){
    let start:number = +( new Date() ) // 强制类型转换
    let curr:number = start
    while(true){
        curr = +( new Date() )
        if( (curr-start)>time ){
            break
        }
    }
}

/**
 * @reverse 翻转字符 
 * @returns string
 */
export function reverse(s:string){
    return s.split("").reverse().join("")
}

