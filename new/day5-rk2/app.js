#! /usr/bin/env node

const child_process=require('child_process');
const fs=require('fs');
const server=process.argv[2];

let childProcess=createProcess();
function createProcess(){
    let child=child_process.exec('node '+server,(error,stdout,stderr)=>{
        if(error){
            throw error
        }
        console.log('====',stdout);
        console.log('----',stderr);
    })
    return child;
}

let watcher=fs.watch(server);

watcher.on('change',()=>{
    childProcess.kill();
    childProcess=createProcess();
})