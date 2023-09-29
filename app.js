require("dotenv").config();
 
 const express = require("express");
 const app = express();
 const connetDB = require("./db/connect");

const PORT = 5000;

const products_routes = require("./routes/products");

 app.get("/", (req,res) => {
    res.send("Hey I m live");
 });


//middleware or to set router
app.use("/api/products",products_routes);

 const start = async () => {
    try{
        await connetDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
          console.log("Server is ready");
        });
    }catch (error) {
        console.log(error);
    }
 }

start();