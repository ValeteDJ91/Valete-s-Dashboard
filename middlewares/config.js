var middleware = function(req, res, next) {
  console.log('middleware config')
  res.redirect('config/login')
  //next();
}

module.exports = middleware;