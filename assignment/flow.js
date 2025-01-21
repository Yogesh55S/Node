const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url === '/Home'){
    res.write('<h1>Welcome to home page');
    return res.end();
  }else  if(req.url === '/Men'){
    res.write('<h1>Welcome to Men page');
    return res.end();
  }else  if(req.url === '/Women'){ 
    res.write('<h1>Welcome to women page');
    return res.end();
  }else  if(req.url === '/Child'){
    res.write('<h1>Welcome to child page');
    return res.end();
  }
res.setHeader('Content-type','text/html');
res.write(`<html>
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Men">Men</a></li>
        <li><a href="/Women">women</a></li>
        <li><a href="/Child">chile</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>`);
res.end(); 
});

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`server is running at localhost:${PORT}`);
})