#! /usr/bin/env node

const fs=require('fs');
const path=require('path');
let dirName = process.argv[2].slice(1);

//判断有没有第二个参数
if(process.argv[2]){
    let url=path.join(process.cwd(),dirName);
    //判断有没有路径
    if(fs.existsSync(url)){
        //判断是文件还是文件夹
        if(fs.statSync(url).isDirectory()){
            //读取文件夹
            let arr=fs.readdirSync(url);
            //循环所有的文件夹
            let list = arr.map(item => {
                //获取文件扩展名
                let extname = path.extname(item);
                //获取文件夹大小
                let size = fs.statSync(path.join(dirName,item)).size;
                //返回拼接结果
                return `${item}-${extname && extname.slice(1)}-${size ? size : ''}`
            })
            console.log(list)
        }else{
            console.log(dirName)
        }
    }else{
        console.log('文件路径不存在')
    }
}