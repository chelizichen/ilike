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

/**
 * @call 手写
 * bind 返回一个被改变this 指向之后的函数
 * @step1 先判断ctx 是不是一个obj 对象
 * @step2 返回绑定后this 的函数
 * 
 */
// @ts-ignore
 Function.prototype._call = function(ctx:any,...args:any[]) {
    const obj:Record<string,Function> = ctx === undefined?Window:Object(ctx)
    obj.fn = this as Function
    let ret:Function = obj.fn(args)
    delete obj.fn
    return ret
}
/**
 * @bind 手写
 * bind 和 call 参数一样
 * 但是返回的是一个被绑定过后的函数
 * 所以需要用到闭包
 */
// @ts-ignore
Function.prototype._bind = function(ctx:any,...args:any[]) {
    const fn = this
    return function(){
    // @ts-ignore
        fn._call(ctx,args)
    }
}

/**
 * 爬楼梯 
 */

export function climbSteps(n:number){
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for(let i =2; i<n ;i++){
        dp[i] = dp[i-2]+dp[i-1]
    }
    return dp[n]
}

/**
 * @setNumProxy 解决
 * 先将小数乘以 n 倍，然后结果再除以 n
 * setNumProxy({a:0.1,b:0.2},100,(args)=>{
 *   return args.a + args.b
 * })
 */

function setNumProxy<K extends Record<string,any>>(target:K,size:number,fn:(args:K)=>number)
{
     // 先判断 倍数是否为10的倍数
    if(size % 10 === 0)
    {
        // 拦截器
        let handler = {
            get:function(target:Record<string,number>,properkey:string )
            {
                if(typeof target[properkey] === 'number')
                {
                    target[properkey] = target[properkey] * size
                    return Reflect.get(target,properkey)
                }
                else
                {
                    throw new TypeError(' 参数必须为数字 ')
                }
            }
        }
        let proxy = new Proxy(target,handler)
        let currValue = fn(proxy)
        return currValue / size
    }
    else
    {
        throw new Error('倍数 不为 10 的倍数')
    }
}
