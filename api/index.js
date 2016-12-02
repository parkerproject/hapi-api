
const Handler = require('./handlers');

exports.register = (plugin, options, next) => {

  plugin.route([
    { method: 'GET', path: '/', config: Handler.Home },
    { method: 'GET', path: '/restricted', config: Handler.Restricted },
    { method: 'GET', path: '/{path*}', config: Handler.notFound }
  ]);

  next();
};

exports.register.attributes = {
  name: 'api'
};
