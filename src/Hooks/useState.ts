/**
 * @useState 
 * react 的方法
*/
export function render(){
    console.log('值不一样，渲染了');
}

type retUseState<T> = [()=>T,(fn:(oldVal:T)=>T)=>void]
export const useState = (function(){
    return function<T>(initState:T):retUseState<T>{
        let state = {
            val:<T>initState
        }
        function setState(fn:(oldVal:T)=>T):void{
            if(state.val !== fn(state.val)){
                state.val = fn(state.val)
                render()
            }else{
                console.log("没有被渲染");
            }
        }
        function getState(){
            return state.val
        }
        function setCurr(){
            let ret:retUseState<T> = [getState,setState]
            return ret
        }

        return setCurr()
    }
}())
