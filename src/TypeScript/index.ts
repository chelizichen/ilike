/**
 * @令人困惑的TypeScript
 */

/**
 * @defineVarType <T,V>
 * @param <VarType as K,NewDefineType as V >
 * @returns a newType
 */
import { defineVarType } from "./Confuse/defineVarType";
/**
 * 假设我有一个变量
 */
const Fruit = {
    apple:1,
    banana:2,
    strawberry:3
}
/**
 * 现在我想根据这个Fruit 的结构得到一个新的类型
 */
const newFruit:defineVarType<typeof Fruit,{price:number,season:string}> = {
    apple:{
        price:1,
        season:"spring"
    },
    banana:{
        price:2,
        season:"summer"
    },
    strawberry:{
        price:3,
        season:"summer"
    }
}

import { TypeObject } from "./Confuse/object";
/**
 * 定义 对象的时候总是取不到对象的值
 * 而且又不知道类型的时候会报错
 * 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 
 * TypeObject<V>
 */

 const typeObj:TypeObject<{num:number,name:string}>={
    a:{
        name:"with or with out U",
        num:1
    },
    b:{
        name:"clockwise",
        num:2
    }
}
Object.keys(typeObj).forEach(el=>{
    console.log(typeObj[el]);
})
