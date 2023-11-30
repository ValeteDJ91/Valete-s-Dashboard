var middleware = function (req, res, next) {
  if (req.session?.user) { next() }
  else { res.redirect('config/login') }
}

// https://www.npmjs.com/package/express-session
// https://www.loginradius.com/blog/engineering/password-hashing-with-nodejs/

module.exports = middleware;