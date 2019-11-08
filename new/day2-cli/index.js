#! /usr/bin/env node

let {version}=require('./package.json');
let app=require('./Server/index.js');

if(process.argv[2]==='-v'){
    console.log(version)
}else{
    let port=process.argv[3]&&process.argv[2]?process.argv[3]:8080;
    app.listen(port,()=>{
        console.log('服务启动成功'+port)
    })
}