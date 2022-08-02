const express = require('express');
require('dotenv').config()

const mongoose = require('mongoose')
// express app
const app = express();

//middleware
app.use(express.json())

//routes


//connect to the db
mongoose.connect(process.env.MOGODB)
.then(()=> {
    //listen the port
    app.listen(process.env.PORT, () => {
    console.log(`connect to the db & listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})

