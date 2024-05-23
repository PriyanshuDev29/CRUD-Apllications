import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import * as dotenv from "dotenv";
import Routes from "./routes/route.js";

dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Routes);

const URL=process.env.URL;

Connection(URL);

const PORT=process.env.PORT || 8000;


app.listen(PORT, ()=>{
    console.log(`Server connected successfully on ${PORT}`);
});