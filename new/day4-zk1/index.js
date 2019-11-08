#! /usr/bin/env node
const fs=require('fs');
const path=require('path');

//判断有没有拼接的这个路径
if(fs.existsSync(path.join(process.cwd(),process.argv[2]))){
    //有的话就把它原来的文件名修改
    fs.renameSync(process.argv[2],process.argv[3]); 
}else{
    console.log('路径不存在')
}