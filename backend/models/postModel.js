import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    posts: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const postSchema = mongoose.model("post", schema);
export default postSchema;
