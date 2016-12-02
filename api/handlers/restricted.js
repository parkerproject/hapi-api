module.exports = {
  auth: 'jwt',
  handler: function (request, reply) {
    return reply({ result: 'Restricted!' });
  }
};
