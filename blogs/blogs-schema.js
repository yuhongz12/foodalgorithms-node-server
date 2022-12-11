import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    title: String,
    Author: String,
    summary: String}, {collection: 'blogs'})

export default blogsSchema