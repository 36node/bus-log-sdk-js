#!/usr/bin/env node

const jsonServer = require("json-server");
const { toJsonServer } = require("@36node/query-normalizr");

const mock = require("../mock");

const { db = {}, rewrites = {}, routers = [] } = mock({
  vechileRecordsCount: 100,
});

const server = jsonServer.create();
const dbRouter = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// body parser
server.use(jsonServer.bodyParser);

// rewrites
server.use(jsonServer.rewriter(rewrites));

// use query normalizr
server.use((req, res, next) => {
  req.query = toJsonServer(req.query);
  return next();
});

// routes
routers.forEach(router => server.use(router));
server.use(dbRouter);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
