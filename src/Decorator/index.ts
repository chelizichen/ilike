// 引入元数据
import 'reflect-metadata'

/**
 * @GET (url) 来自 Nest 的 Get 装饰器
 * @methods 修改后 [ 请求URL得到的数据,...其他数据]
 */
export const GET = (url:string):MethodDecorator=>{
    const data = new Promise(function(res,rej){
        let Query:Record<string,any> = {}
        let re = /(\w+)=(\w+)/ig
        if(url.indexOf("?") !== -1){
            let queryString = url.split("?")[1]
            let reArray = queryString.match(re)
            for(let i=0;i<reArray!.length;i++){
                let GetQueryArray = reArray![i].split("=")
                Query[GetQueryArray[0]] = GetQueryArray[1]
            }
        }
        res([url,Query])
    })
    return function(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor){
        const method:Function = descriptor.value
        descriptor.value = function(...args:any[]){
            data.then((res:any)=>{
                if(Reflect.getMetadata("query",target,propertyKey).length === 0){
                    method.apply(this,[args,res])
                }else{
                    const queryString = Reflect.getMetadata("query",target,propertyKey)
                    res[1] = res[1][queryString]
                    method.apply(this,[args,res])
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