/**
 * @Record
 * @see K中的每个属性都转为T类型
 */
type Record<K extends string | number | symbol, T> = { 
    [P in K]: T
}

type RecordCopy<K extends keyof any,T>={
    [P in K]: T
}

type UniversalObject = {
    [K in string]:any
}

export type TypeObject<V> ={
    [K in string]:V
}

// 编译通过
const obj:RecordCopy<string,any> = {
    a:1,
    b:'2',
    c:()=>3
}

// 编译通过
const uniObj:UniversalObject ={
    a:1,
    b:'2',
    c:()=>3
}

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

Object.keys(obj).forEach(el=>{
    obj[el]    
})

Object.keys(uniObj).forEach(el=>{
    obj[el]    
})

Object.keys(typeObj).forEach(el=>{
    obj[el]    
})

