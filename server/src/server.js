import express from 'express';
import 'dotenv/config';

import connectDB from './config/connectDB.js';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Running as: http://localhost:${process.env.SERVER_PORT}`);
  await connectDB();
});
