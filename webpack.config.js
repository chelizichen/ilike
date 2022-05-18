const path = require("path")
module.exports ={
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:[".ts"]
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader",
                exclude:"/node_modules/"
            }
        ]
    },
    mode:"development"
}