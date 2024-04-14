const express = require('express')
const cors = require('cors')
const app = express()
const baseRouter = require('./routers/baseRouter')
// const path = require('path')

// require('dotenv').config({ path: path.resolve(__dirname, 'env') })
require('dotenv').config()
  
const mongoose = require('mongoose');

// const port = process.env.PORT || 8100;
const port = process.env.port || 8080;
const URI  = process.env.URI;
// MiddleWares
app.use(express.json())
app.use(cors());
app.use(baseRouter)

mongoose.connect(URI)
  .then(() => {
    console.log("Connected to the database successfully ...");
    app.listen(port, (err) => {
      if (err) {
        console.log("Something went wrong: ", err);
      }
      console.log(`Server is running on Port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Can not connect to the Database ...", error);
  });

