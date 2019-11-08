const http = require('http');
const fs = require('fs');

let type = {
    '/json': 'application/json',
    '/txt': 'text/plain',
    '/jpg': 'image/jpeg'
}

const server = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        res.writeHead(200, {
            'Content-Type': type[req.url]
        })
    }
    if(req.url === '/json') {
        res.end(JSON.stringify([{title: '标题'}]))
    }else if(req.url === '/txt') {
        res.end('txt')
    }else if(req.url === '/jpg') {
        let BufImg = fs.readFileSync('1.jpg');
        res.end(BufImg)
    }else{
        res.end('ok')
    }
}).listen(process.env.PORT || 3000)