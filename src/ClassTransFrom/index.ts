/**
 * @method plainToInstance(obj,CLASS)
 * @method classToPlain(CLASS)
*/
export class ClassTransFormer{
    constructor(){}
    plainToInstance<T extends Record<string,any>>(obj:T|T[],CLASS:new ()=>any)
    {
        if(obj instanceof Array){
            let classArray = []
            for(let v of obj){
                const arr:Array<T|T[]> = Object.entries(v)
                let currClass = this._dealPlainToClass(CLASS,arr)
                classArray.push(currClass)
            }
            return classArray
        }else{
            const arr = Object.entries(obj)
            let currClass = this._dealPlainToClass(CLASS,arr)
            return currClass
        }
    }

    classToPlain(CLASS:InstanceType<any>){
        let Plain:any = {};
        let EntriesArray:Array<any> = Object.entries(CLASS)
        for(let i = 0 ;i < EntriesArray.length ; i++){
            Plain[EntriesArray[i][0]] = EntriesArray[i][1]
        }
        return JSON.stringify(Plain)
    }
    
    _dealPlainToClass(CLASS:new ()=>any,arr: string | any[]){
        let currClass = new CLASS()
        for(let i =0;i<arr.length;i++){
            currClass[arr[i][0]] = arr[i][1]
        }
        return currClass
    }
}



