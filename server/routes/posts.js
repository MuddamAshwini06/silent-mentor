import express from "express";
import Experience from "../models/Experience.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* Create Post */
router.post("/", protect, async (req, res) => {
  const { name, company, category, content, resources } = req.body;

  const post = await Experience.create({
    user: req.user._id,
    name,
    company,
    category,
    content,
    resources
  });

  res.status(201).json({ message: "Post posted successfully", post });
});

/* Get All Posts (View Experience) */
router.get("/", async (req, res) => {
  const posts = await Experience.find().sort({ createdAt: -1 });
  res.json(posts);
});

/* Get My Posts */
router.get("/mine", protect, async (req, res) => {
  const posts = await Experience.find({ user: req.user._id });
  res.json(posts);
});

/* Update Post */
router.put("/:id", protect, async (req, res) => {
  const post = await Experience.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (post.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  const updatedPost = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({ message: "Post edited successfully", updatedPost });
});

/* Delete Post */
router.delete("/:id", protect, async (req, res) => {
  const post = await Experience.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (post.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await post.deleteOne();
  res.json({ message: "Post deleted successfully" });
});

export default router;
