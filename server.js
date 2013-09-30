var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

/*
server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});
*/

server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, function(req, res, next) {
  console.log(req.params[0]);
  console.log(req.params[1]);
  res.send(req.params);
  return next();
});

server.listen(3333, function () {
  console.log('%s listening at %s', server.name, server.url);
});
