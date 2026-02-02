import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AcademicsViewExperience() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://silent-mentor-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        const academicsPosts = data.filter(p => p.category === "Academics");
        setPosts(academicsPosts);
      });
  }, []);

 return (
 <div className="academics-bg">
    <div className="form-container">
    <div className="academics-main-title">Academic Experiences</div>

    {posts.map(post => (
      <div
        key={post._id}
        className="academics-experience-card"
        onClick={() => navigate(`/academics/view/${post._id}`)}
      >
        <div className="academics-name">{post.name}</div>
        <div className="academics-company">{post.company}</div>
        <div className="academics-read-link">
          Click to read full details
        </div>
      </div>
    ))}
  </div>
  </div>
);

}
