const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Maria',
    lastName: 'Stanley',
    email: 'maria@stanley.com',
    password: 'password123'
  },
  {
    firstName: 'Sthela',
    lastName: 'Rooster',
    email: 'sthela@roster.com',
    password: 'password456'
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})
