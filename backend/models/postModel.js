import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { timestamps: true });

const postSchema = mongoose.model("post", schema);
export default postSchema;
