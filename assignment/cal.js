const {sumrequest} = require("./sum");
const handler = (req,res)=>{
  console.log(req.url,req.method); 
  
  if(req.url === "/"){
    res.setHeader('Content-Type','text/html');
    res.write(`<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  <h1>Welcome to the calculator</h1>
  <a href="/calculator"> Go to calculator</a>
</body>
</html>`);
return res.end();
  } else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  <h1>Welcome to the calculator</h1>
  <form action="/cal-result" method="POST">
   <input type="text" name="first" placeholder="Enter first number">
  <input type="text" name="second" placeholder="enter second nunber">
   <input type="submit" value="submit">
  </form>
</body>
</html>`);
return res.end();
  }else if(req.url.toLowerCase() === '/cal-result' && req.method ==='POST'){
   return sumrequest(req,res);
  }

  res.setHeader('Content-Type','text/html');
  res.write(`<html lang="en">
<head>
<title>Calculator</title>
</head>
<body>
<h1>404 Page not found</h1>
<a href="/"> go to home page</a>
</body>
</html>`)
return res.end();
}
exports.handler = handler;