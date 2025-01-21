const http = require("http");
const {handler} = require("./cal");
const server = http.createServer(handler);

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})