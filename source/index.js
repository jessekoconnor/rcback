var server = require('./server'),
    routes = require('./routes');

routes.addRoutes(server.server);
server.start(server.server);

