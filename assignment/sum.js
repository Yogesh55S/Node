const { buffer } = require("stream/consumers");

const sumrequest=(req,res)=>{
console.log("in sum request is come",req.url);
const body = [];
req.on('data',chunk =>{
body.push(chunk);
req.on('end',()=>{
 const bodystr= Buffer.concat(body).toString();
 const params = new URLSearchParams(bodystr);
 const bodyobj = Object.fromEntries(params);
 const result = Number(bodyobj.first) + Number(bodyobj.second);
 console.log(result);
 res.setHeader('Content-Type','text/html');
  res.write(`<html lang="en">
<head>
<title>Calculator</title>
</head>
<body>
<h1>Your result is ${result}</h1>
<a href="/"> go to home page</a>
</body>
</html>`)
return res.end();
})
});
}
exports.sumrequest = sumrequest;