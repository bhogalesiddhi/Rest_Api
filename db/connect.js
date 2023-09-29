const mongoose = require("mongoose");

// uri = "mongodb+srv://bhogalesiddhi640:mbZ22SljqTWqXCXZ@cluster0.u24u4rj.mongodb.net/Cluster0";
// uri = "mongodb://127.0.0.1:27017/api";

const connetDB = (uri) => {
    console.log("connect db")
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology:true,
    });
};

module.exports = connetDB;
