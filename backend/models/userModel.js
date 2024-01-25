import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { timestamps: true });

const userSchema = mongoose.model("user", schema);
export default userSchema;
