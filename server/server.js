import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './Routes/UserRoutes.js'
import postRoute from './Routes/PostRoutes.js'
// express app
const app = express();

//middleware
dotenv.config();
app.use(express.json())

//routes
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)



//connect to the db
mongoose.connect(process.env.MOGODB , {     
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    //listen the port
    app.listen(process.env.PORT, () => {
    console.log(`Connect to the db & listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})

