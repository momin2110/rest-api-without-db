const {v4 : uuidv4} = require('uuid')
const users = [
    {
        id : uuidv4(),
        username : "Momin Ahmed",
        email : "momin2210@gmail.com"
    },
    {
        id : uuidv4(),
        username : "Shohel Khan",
        email : "sohel34@hotmail.com"
    }
]

module.exports = users;