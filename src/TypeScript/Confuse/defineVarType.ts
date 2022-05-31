
/**
 * @type getVarType
 * @returns varType 
 */

export type defineVarType<T,V> = {
    [K in keyof T]:{
        [K2 in K]:V
    }
}[keyof T]

const Fruit = {
    apple:1,
    banana:2,
    strawberry:3
}

type newFruitPrice = {
    [K in keyof typeof Fruit]:{
        [K2 in K]:number
    }
}[keyof typeof Fruit]

type anthorNewFruitPrice = {
    [K in keyof typeof Fruit]:number
}

const tp:newFruitPrice = {
    apple: 1,
    banana: 2,
    strawberry: 3
}

const newTP:anthorNewFruitPrice ={
    apple:1,
    banana:2,
    strawberry:3
}

const DiyNewTp:defineVarType<typeof Fruit,number> = {
    apple:1,
    banana:2,
    strawberry:3
}
