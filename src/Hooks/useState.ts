/**
 * @useState 
 * react 的方法
*/

export const useState = (function(){
    return function<T>(initState:T):[T,(fn:(oldVal:T)=>T)=>void]{
        let currState:T
        function setState(fn:(oldVal:T)=>T):void{
            currState = fn(currState)
            console.log("currState",currState);
        }
        currState = initState
        return [currState,setState]
    }
}())

// export function useState<T>(initData:T){

//     let initial:T = initData
//     return function(){
//         function setData(fn:(oldVal:T)=>T):any{
//             const newData = fn(initial)
//             initial = newData
//         }
//         return [initial,setData]
//     }
// }