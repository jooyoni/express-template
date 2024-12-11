import { Request, Response } from 'express';
import sequelize from './config/database';

const PORT = 3001;

const express = require('express');

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    test: 'test',
  });
});

app.listen(PORT, () => [console.log(`server started on ${PORT}`)]);

sequelize.authenticate().then(() => {
  console.log('DB connected');
  app.listen('1234', () => {
    console.log(`Server started`);
  });
});
