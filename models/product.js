import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  key : {
    type : String,
    required : true,
    unique : true
  },
  name : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  dimensions : {
    type : String,
    required : true
  },
  description: {
    type : String,
    required : true
  }
})

const Product = mongoose.model("Product",productSchema)

export default Product;