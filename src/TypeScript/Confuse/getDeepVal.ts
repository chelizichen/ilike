/**
 * @getDeepVal 得到深层的对象的值
 */
export const getDeepVal= <K,T extends keyof K,V extends keyof K[T]> (obj:K,Key:T,DeepVal:V)=> {
    return obj[Key][DeepVal]
}

const deepObj = {
    a:'U2W',
    b:"clockWise",
    c:{
        player:"daniel padim"
    }
}

const getVal = getDeepVal(deepObj,"c","player")



console.log()