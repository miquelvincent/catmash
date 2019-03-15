const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cat = require('./routes/cat.route');

const app = express();
const port = process.env.PORT || 5000;

// Connexion to DB
const dev_db_url = `mongodb+srv://admin:admin@cluster0-8f3ze.mongodb.net/cats?retryWrites=true`;
mongoose.connect(dev_db_url, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Routes definition
app.use('/api/cats', cat);

// Listening port definition
app.listen(port, () => console.log(`Listening on port ${port}`));
