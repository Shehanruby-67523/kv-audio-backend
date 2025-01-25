import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({

  email:{
    type: String,
    required: true,
    unique: true
  },

  password:{
    type: String,
    required: true
  },

  role:{
    type: String,
    required: true,
    default: "customer"
  },

  firstName:{
    type: String,
    required: true
  },

  lastName:{
    type: String,
    required: true
  },

  address:{
    type: String,
    required: true
  },

  phone:{
    type: String,
    required: true
  },

  profilePicture:{
    type: String,
    required: true,
    default: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
  }
});

const User = mongoose.model("User",userSchema);

export default User;