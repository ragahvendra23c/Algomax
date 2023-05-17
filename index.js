const jsonServer =require("json-server");
const server =jsonServer.create()
const router=jsonServer("db.json")
const middlewares=jsonServer.defaults();
const port=process.env.Port || 30007;

server.use(middlewares)
server.use(router)

server.listen(port)
