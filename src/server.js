// import fs from 'fs';
const express = require('express');
const routes = require('./routes')

const app = express();
app.use(express.json())
app.use(routes);

// Handle 404
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error)
})

// Catch errors
app.use((err, req,res, next) => {
  res.status(err.status || 500)
  res.json({ error: err.message })
})

// Set port from env variable or default to 3000
const port = process.env.port || 3000
app.listen(port, () => {
  console.log(`API listening at port ${port}.`);
})
