import mongoose from "mongoose";

// Schema for the inquiry
const inquirySchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    response:{
        type: String,
        required: false,
        default: ""
    },
    isResolved:{
        type: Boolean,
        required: true,
        default: false
    }
})

// Model for the inquiry
const Inquiry = mongoose.model("Inquiry",inquirySchema);

export default Inquiry;