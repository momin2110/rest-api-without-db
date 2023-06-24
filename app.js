const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/users", userRouter)


app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + "/views/index.html")
});

app.use((req, res, next)=>{
    res.status(404).json({message: "Route not Found"})
});
app.use((err, req, res, next)=>{
    res.status(500).json({message: "Something is Broke"})
})

module.exports = app;