const sayHello = import('./modules')

exports.handler = function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ hello: sayHello() }, null, 2),
  })
}