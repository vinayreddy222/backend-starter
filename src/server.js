import http from "http";
import "dotenv/config";

const server = http.createServer(app);


const port=proccess.env.port;
server.listen(port,()=>{
    console.log(`server is runnin at ${port}`)
});