import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CareerViewExperience() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://https://silent-mentor-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        const careerPosts = data.filter(p => p.category === "Career");
        setPosts(careerPosts);
      });
  }, []);

 return (
 <div className="career-bg">
    <div className="form-container">
    <div className="career-main-title">Career Experiences</div>

    {posts.map(post => (
      <div
        key={post._id}
        className="career-experience-card"
        onClick={() => navigate(`/career/view/${post._id}`)}
      >
        <div className="career-name">{post.name}</div>
        <div className="career-company">{post.company}</div>
        <div className="career-read-link">
          Click to read full details
        </div>
      </div>
    ))}
  </div>
  </div>
);

}
