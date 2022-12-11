import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "UserModel"
    },
    blog: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    }}, {collection: 'blogs'})

export default blogsSchema