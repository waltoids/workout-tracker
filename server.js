const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 3000;
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
//Public resources
app.use(express.static('public'));
//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });