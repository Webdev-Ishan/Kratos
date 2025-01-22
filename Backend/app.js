import express from 'express';
import morgan from 'morgan';
import connect from './DB/db.js';
import UserRoute from './Routes/userRoutes.js';
import cookieParser from 'cookie-parser';
connect();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {

    res.send('Hello World');
});

app.use('/users', UserRoute);

export default app;