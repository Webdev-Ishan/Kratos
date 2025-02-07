import express from 'express';
import morgan from 'morgan';
import connect from './DB/db.js';
import UserRoute from './Routes/userRoutes.js';
import ProjectRoute from './Routes/projectRoutes.js';
import aiRoutes from './Routes/aiRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
connect();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {

    res.send('Hello World');
});


app.use('/projects', ProjectRoute);
app.use('/users', UserRoute);
app.use('/ai',aiRoutes);

export default app;