const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.render('home')
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
