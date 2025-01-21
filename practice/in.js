const http = require('http');
const fs = require("fs");
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Input</title></head>');
res.write('<body><h1>welcome to homepage</h1></body>');
  res.write('<form action="/submit-details" method="POST');
  res.write('<input type="text" name="username" placeholder="enter your name"><br>');
  res.write('<label for="gender"> Gender</label>');
  res.write('<input type="radio" id="male" name="gender" value="10"');
  res.write('<label for="male"> Male</label>');
  res.write('<input type="radio" id="female" name="gender" value="20"');
  res.write('<label for="female">Female</label><br></br>');
  res.write('<button type="submit"> submit</button>');
  res.write('</form>');
  res.write('</html>');
  return res.end();
  }else  if(req.url ==="/submit-details" && req.method == "POST"){
    fs.writeFileSync('user.txt', 'yogesh');
    res.statusCode = 302;
  }
});

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log(`server is running at localhost:${PORT}`);
});