// import { GET, Query } from "./Decorator";
// import { Bubbling, EventBus, Unique } from "./Interview";

import { getK } from "./Interview";

// import { useState } from "./Hooks/useState";
const arr = [3,6,7,11]
const k = getK(arr,8)
console.log(k);


// let [num,addNum] = useState<number>(0)
// console.log('initState',num());
// addNum(val=>val+1)
// console.log('after add ',num());
// addNum(val=>val)



// class WestController{
//     constructor(private readonly WestService:WestService){}
//     @GET("www.baidu.com?id=1&&msg=awdasd")
//     testGet(@Query("msg") query:any){
//         console.log(query);
//         const { msg } = arguments[1]
//         this.WestService.testGet(msg)
//         console.log("arguments",arguments);
//     }
//     @GET("www.baidu.com?id=1&&msg=awdasd")
//     testWithOutQuery(@Query() query:any){
//         console.log("arguments",arguments);
//     }
// }

// class WestService{
//     testGet(msg:string){
//         console.log("msg",msg);
//     }
// }
// // 执行代码 不管类型了
// const Wheal:any = new WestController(new WestService())
// const a1:any = Object.getOwnPropertyNames(WestController.prototype).slice(1)
// for(let i =0;i<a1.length;i++){
//     Wheal[a1[i]]()
// }   


// let arr1 = [9,6,5,2,1,8,0,4]
// Bubbling(arr1)
// console.log(arr1);

// let arr2 = [1,2,34,1,2,{a:1,b:2},{a: 1,b:2},{a:1,b:2},[1,2,3],[1,2,3],[1,2,3],'',[],{a:1,b:2}]
// let newArr2 = Unique(arr2)
// console.log(newArr2);

// const obj3 = new EventBus()
// obj3.EMIT("say",()=>{
//   console.log('hello world');
// })

// obj3.ON("say")
// obj3.EMIT("hi",()=>{
//   console.log("hi");
// })

// obj3.EMIT("niubi",(a:1)=>{
//   console.log(a);
// })


