const http = require("http");
const server = http.createServer((req,res) =>{
res.setHeader('Content-type','text/html');
res.write('<html>');
res.write('<head><title>response</title></head>');
if(req.url === '/'){
res.write('<body><h1>Hello friday</h1></body>');
return res.end();
}else if(req.url === '/next'){
res.write('<h1>that is next phase </h1>');
return res.end();
}
res.write('<h1> that is default page</h1>');
res.write('</html>');
 return res.end();
});

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log(`server is runing at localhost:${PORT}`);
})