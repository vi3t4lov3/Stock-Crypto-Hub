import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './Routes/UserRoutes.js';
import postRoute from './Routes/PostRoutes.js';
import calRoute from './Routes/ErRoutes.js';
import alertRoute from './Routes/AlertRoutes.js';
import wlRoute from './Routes/WatchListRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

//dirname path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express app
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
//user image after uploaded 
app.use('/public', express.static('public'));
app.use('/uploads', express.static('images'));
app.use(cors());
// to serve images inside public folder
app.use(express.static(path.join(__dirname, 'public/uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// if we're in production, serve client/build as static assets

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/cal', calRoute);
app.use('/api/wl', wlRoute);
app.use('/api/alert', alertRoute);

//connect to the db
mongoose
	.connect(process.env.MOGODB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		//listen the port
		app.listen(process.env.PORT, () => {
			console.log(`Connect to the db & listening on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
