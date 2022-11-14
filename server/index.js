const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const todoItemRoute = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:3000", "https://mern-todo-app.onrender.com"],
}));

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URI,{useUnifiedTopology: true, useNewUrlParser : true})
.then(()=>console.log(`db connected`))
.catch((err)=>console.log(err))

app.use('/todo', todoItemRoute);


app.listen(PORT,()=>{
    console.log(`server started running on port:${PORT}`)
})