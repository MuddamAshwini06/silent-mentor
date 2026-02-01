import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Academics", "Skills", "Career"],
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000
    },
    resources: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
