/**
 * @see 体操
 */

type Enity = {type:"User"} | {type:"Post"} | {type:"Comment"}

type defineVarTypeDynamic = {
    [Key in Enity["type"]]:{
        type:Key
    } & Record<`${Key}Id`,string>
}[Enity["type"]]


const obj:defineVarTypeDynamic ={
    type:"User",
    UserId:"1"
}
