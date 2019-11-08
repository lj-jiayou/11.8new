const koa=require('koa');
const app=new koa();
const static=require('koa-static');
const path=require('path');
const fs=require('fs');
const render = require('koa-ejs');

render(app, {
    root: path.join(__dirname,'../','static'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.use(async (ctx,next)=>{
    let url=path.join(process.cwd(),ctx.request.path);
    if(fs.existsSync(url)){
        if(fs.statSync(url).isDirectory()){
            let dirList=fs.readdirSync(url);
            ctx.render('index',{
                list:dirList
            });
        }else{
            await next();
        }
    }else{
        await next();
    }
})
app.use(static(process.cwd()))

module.exports=app;