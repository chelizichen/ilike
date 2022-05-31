/**
 * @createArray
 * @params <K,L,K[]>
 * 创建一个长度为 N，每一项都为 E 的字符串数组
 */
type createArray<K extends string,L extends number,Arr extends K[]> = Arr['length'] extends L?
    Arr:createArray<K,L,[K,...Arr]>

let  strArray :createArray<"a",3,[]> = ['a','a','a']

/**
 * @add 加法
 */
type add<A extends number,B extends number> = [...createArray<'a',A,[]>,...createArray<'b',B,[]>]['length']

const sum:add<1,2> = 3

