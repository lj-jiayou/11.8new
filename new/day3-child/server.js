const http=require('http');
const child_process=require('child_process');

let child=child_process.spawn('node',['child.js']);

child.stdout.on('data',data=>{
    console.log('====',data.toString())
})
child.stderr.on('data',data=>{
    console.log('+++++',data.toString())
})

let child1=child_process.exec('node child.js',(error,stdout,stderr)=>{
    if(error){
        throw error;
    }
    console.log('.....',stdout)
    console.log('????',stderr)
})