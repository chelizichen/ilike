/**
 * @令人困惑的TypeScript
 */
/**
 * @defineVarType <T,V>
 * @param <VarType as K,NewDefineType as V >
 * @returns a newType
 */
import { defineVarType } from "./Confuse/defineVarType";
const Fruit = {
    apple:1,
    banana:2,
    strawberry:3
}
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