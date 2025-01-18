import mongoose from "mongoose";

// Schema for the product
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
  category : {
    type : String,
    required : true,
    default : "Uncategorized"
  },
  dimensions : {
    type : String,
    required : true
  },
  description: {
    type : String,
    required : true
  },
  availability : {
    type : Boolean,
    required : true,
    default : true
  },
  image : {
    type : String,
    required : true
  }
})

// Model for the product
const Product = mongoose.model("Product",productSchema)

export default Product;