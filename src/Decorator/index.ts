// 引入元数据
import 'reflect-metadata'
/**
 * @GET (url) 来自 Nest 的 Get 装饰器
 * @methods 修改后 [ 请求URL得到的数据,...其他数据]
 * @params
 */
export function _getQueryObject(url:string){
    let QueryObj:Record<string,any> = {}
    let re = /(\w+)=(\w+)/ig
    if(url.indexOf("?") !== -1){
        let queryString = url.split("?")[1]
        let reArray = queryString.match(re)
        for(let i=0;i<reArray!.length;i++){
            let GetQueryArray = reArray![i].split("=")
            QueryObj[GetQueryArray[0]] = GetQueryArray[1]
        }
    }
    return QueryObj
}
export const GET = (url:string):MethodDecorator=>{
    const data = new Promise(function(res,rej){
        let Query:Record<string,any> = _getQueryObject(url)
        res([url,Query])
    })
    return function(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor){
        const method:Function = descriptor.value
        descriptor.value = function(){
            data.then((res:any)=>{
                const queryData = Reflect.getMetadata("query",target,propertyKey)
                console.log("queryData",queryData);
                if(queryData.length === 0){
                    method.apply(this,res)
                }else{
                    const query:Record<string,any> = {}
                    const queryString = queryData[0]
                    query[queryString] = res[1][queryString]
                    res[1] = query
                    method.apply(this,res)
                }
            })
        }
    }
}
/**
 * @Query 查询URL 中的 url
 * @methods 修改后 [ 请求URL得到的数据,...其他数据]
 */
export const Query = (...args:any[]):ParameterDecorator=>{
    return function(target: Object, propertyKey: string | symbol, parameterIndex: number){
        Reflect.defineMetadata("query",args,target,propertyKey)
    }
}