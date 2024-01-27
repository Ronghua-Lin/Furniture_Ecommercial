const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./router/products");
const cors = require('cors');

dotenv.config();


app.use(cors());
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))

app.use('/api/products',productRouter)
mongoose
  .connect(process.env.MONGODB_URL, { dbName: "furnitureApp" })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT|| port, () => console.log(`Example app listening on port ${process.env.PORT}!`));
