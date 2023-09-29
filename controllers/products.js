const Product = require("../models/product");


const getAllProducts = async (req,res) => {

    const { company , name } = req.query;
    console.log(req.query);
    const queryObject = {};

   if(company) {
    queryObject.company = company;
   }

   if (name){
    queryObject.name = { $regex: name , $options : "i"};
   }

   if(sort) {
    let sortFix = sort.replace("," , " ");
    queryObject.sort = sortFix;
   }

    const myData = await    Product.find(queryObject);
    res.status(200).json({myData});

}; 

const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find(req.query).sort("-name");
    res.status(200).json({ myData});

}; 
 
module.exports = {getAllProducts,getAllProductsTesting};