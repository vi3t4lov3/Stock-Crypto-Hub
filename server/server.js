import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './Routes/UserRoutes.js'
import postRoute from './Routes/PostRoutes.js'
import calRoute from './Routes/ErRoutes.js'
import wlRoute from './Routes/WatchListRoutes.js'
import bodyParser from 'body-parser'
import cors from 'cors';


// express app
const app = express();

// to serve images inside public folder
app.use(express.static('public')); 

app.use('/uploads', express.static('uploads'));

//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();
app.use(express.json())
app.use(cors())

//routes
app.use('/api/user', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/cal', calRoute)
app.use('/api/wl', wlRoute)



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

