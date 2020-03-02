const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({
  path: '/config/config.env'
});

// Middlewares
app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

app.use(express.json());

// Load routes
const fileAnalyzeAPI = require('./routes/fileAnalyze');

// Mount routes
app.use('/api/fileanalyze', fileAnalyzeAPI);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
