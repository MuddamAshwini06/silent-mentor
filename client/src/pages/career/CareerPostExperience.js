import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function CareerPostExperience() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    content: "",
    resources: ""
  });

  const [myPosts, setMyPosts] = useState([]);

  const loadMyPosts = useCallback(() => {
    fetch("https://silent-mentor-api.onrender.com/api/posts/mine", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setMyPosts(data.filter(p => p.category === "Career"));
      });
  }, [token]);

  useEffect(() => {
    loadMyPosts();
  }, [loadMyPosts]);

  const submitExperience = async () => {
    const url = editingId
      ? `https://silent-mentor-api.onrender.com/api/posts/${editingId}`
      : "https://silent-mentor-api.onrender.com/api/posts";

    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...form, category: "Career" })
    });

    alert(editingId ? "Updated" : "Posted");
    setEditingId(null);
    setForm({ name: "", company: "", content: "", resources: "" });
    loadMyPosts();
  };

  const deletePost = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await fetch(`https://silent-mentor-api.onrender.com/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    loadMyPosts();
  };

  return (
    <div className="career-bg">
      <div className="form-container">
        <button className="btn btn-back" onClick={() => navigate("/career")}>Back</button>

        <div className="page-title">
          {editingId ? "Edit Career Experience" : "Post Career Experience"}
        </div>

        <input placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Company-Topic"
          value={form.company}
          onChange={e => setForm({ ...form, company: e.target.value })} />

        <textarea className="big"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })} />

        <textarea className="medium"
          value={form.resources}
          onChange={e => setForm({ ...form, resources: e.target.value })} />

        <button className="btn" onClick={submitExperience}>
          {editingId ? "Update" : "Post"}
        </button>

        {myPosts.map(post => (
          <div key={post._id} className="post-card">
            <p>{post.content}</p>
            <div className="post-actions">
              <button className="btn"
                onClick={() => {
                  setEditingId(post._id);
                  setForm(post);
                }}>Edit</button>

              <button className="btn delete-btn"
                onClick={() => deletePost(post._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
