封校真无趣
领导真牛逼

### 使用ClassTransForm 
    手写 https://github.com/typestack/class-transformer 
    chelizichen 5.18
    import { ClassTransFormer } from "./ClassTransFrom";

    class User {
        id!: number;
        firstName!: string;
        lastName!: string;
        age!: number;

        getName() {
            return this.firstName + ' ' + this.lastName;
        }

        isAdult() {
            return this.age > 36 && this.age < 60;
        }
    }
    const userArray = [
        {
        "id": 1,
        "firstName": "Johny",
        "lastName": "Cage",
        "age": 27
        },
        {
        "id": 2,
        "firstName": "Ismoil",
        "lastName": "Somoni",
        "age": 50
        },
        {
        "id": 3,
        "firstName": "Luke",
        "lastName": "Dacascos",
        "age": 12
        }
    ]
    const t1 = new ClassTransFormer()
    const realUsers = t1.plainToInstance(userArray,User)
    const realUsers1 = t1.plainToInstance(userArray[0],User)


    class dog{
    a=1
    b=2
    c="123"
    d="412312"
    e=false
    }
    console.log( t1.classToPlain(new dog()) )
    console.log( realUsers[0].id )
    console.log( realUsers[0].getName() )
    console.log( realUsers1.id )
    console.log( realUsers1.getName() )


### 使用 @Get @Query
    import { GET, Query } from "./Decorator";
    class West{
        @GET("www.baidu.com?id=1&&msg=awdasd")
        testGet(@Query("id") query:any){
            console.log('应该是baidu',arguments[arguments.length-1]);
        }
        @GET("www.baidu.com?id=1&&msg=awdasd")
        testWithOutQuery(@Query() query:any){
            console.log('应该是baidu',arguments[arguments.length-1]);
        }
    }


    // 执行代码 不管类型了
    const Wheal:any = new West()
    const a1:any = Object.getOwnPropertyNames(West.prototype).slice(1)
    for(let i =0;i<a1.length;i++){
        Wheal[a1[i]]()
    }

