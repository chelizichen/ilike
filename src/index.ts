import { Bubbling, EventBus, Unique } from "./Interview";

// let arr1 = [9,6,5,2,1,8,0,4]
// Bubbling(arr1)
// console.log(arr1);

// let arr2 = [1,2,34,1,2,{a:1,b:2},{a: 1,b:2},{a:1,b:2},[1,2,3],[1,2,3],[1,2,3],'',[],{a:1,b:2}]
// let newArr2 = Unique(arr2)
// console.log(newArr2);

const obj3 = new EventBus()
obj3.EMIT("say",()=>{
  console.log('hello world');
})

obj3.ON("say")
obj3.EMIT("hi",()=>{
  console.log("hi");
})

obj3.EMIT("niubi",(a:1)=>{
  console.log(a);
})