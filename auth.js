const register = function (username) {
  console.log(`User ${username} has been registered`)
}

const login = function(username, password) {
  console.log(`User ${username} is logged in ${password}`)
}

module.exports = {
  register,
  login 
}