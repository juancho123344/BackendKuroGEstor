import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define routes
app.use("/", routes);

export default app;
