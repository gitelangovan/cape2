const http = require("http");
const app = require("./backend/app");

// const server = http.createServer((req, res)=>{
//       res.end("Welcome to my application");;
// });

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("Please Check your port number 3000");
});

