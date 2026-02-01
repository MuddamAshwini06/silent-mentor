import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AcademicsExperienceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("http://https://silent-mentor-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        const selected = data.find(p => p._id === id);
        setPost(selected);
      });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="academics-bg">
    <div className="form-container">
      <button className="btn btn-back" onClick={() => navigate("/academics/view")}>
        Back
      </button>

     <div className="details-name">{post.name}</div>
<div className="details-company">{post.company}</div>

      <p>{post.content}</p>

      <button
        className="btn"
        onClick={() => navigate(`/academics/view/${id}/resources`)}
      >
        View Resources
      </button>
    </div>
    </div>
  );
}
