import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SkillsPostExperience() {
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

  const loadMyPosts = () => {
    fetch("http://https://silent-mentor-api.onrender.com/api/posts/mine", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        const skillsPosts = data.filter(p => p.category === "Skills");
        setMyPosts(skillsPosts);
      });
  };

  useEffect(() => {
    loadMyPosts();
  }, []);

  const submitExperience = async () => {
    const url = editingId
      ? `http://https://silent-mentor-api.onrender.com/api/posts/${editingId}`
      : "http://https://silent-mentor-api.onrender.com/api/posts";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...form, category: "Skills" })
    });

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    alert(editingId ? "Post edited successfully" : "Post posted successfully");

    setEditingId(null);
    setForm({
      name: "",
      company: "",
      content: "",
      resources: ""
    });

    loadMyPosts();
  };

  const deletePost = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmDelete) return;

    await fetch(`http://https://silent-mentor-api.onrender.com/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    alert("Post deleted successfully");
    loadMyPosts();
  };

  return (
    <div className="skills-bg">
      <div className="form-container">

        <button className="btn btn-back" onClick={() => navigate("/skills")}>
          Back
        </button>

        <div className="page-title">
          {editingId ? "Edit Skills Experience" : "Post Skills Experience"}
        </div>

        <input
          placeholder="Your Full Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Company/College - Skill (Example: Siemens - DSA)"
          value={form.company}
          onChange={e => setForm({ ...form, company: e.target.value })}
        />

        <textarea
          className="big"
          placeholder="Describe your experience (max 1000 words)"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
        />

        <textarea
          className="medium"
          placeholder="Resources (one per line)"
          value={form.resources}
          onChange={e => setForm({ ...form, resources: e.target.value })}
        />

        <button className="btn" onClick={submitExperience}>
          {editingId ? "Update Experience" : "Post Experience"}
        </button>

        <h3 style={{ marginTop: "40px" }}>My Skills Posts</h3>

        {myPosts.map(post => (
          <div key={post._id} className="post-card">

            <p>{post.content}</p>

            <div className="post-actions">

              <button
                className="btn"
                onClick={() => {
                  setEditingId(post._id);
                  setForm({
                    name: post.name,
                    company: post.company,
                    content: post.content,
                    resources: post.resources || ""
                  });

                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Edit
              </button>

              <button
                className="btn delete-btn"
                onClick={() => deletePost(post._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
