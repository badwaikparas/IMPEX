const express = require('express')
const cors = require('cors')
const app = express();
const connectDb = require('./db/db.js')
require('dotenv').config();

//Router


//
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
    connectDb()
})