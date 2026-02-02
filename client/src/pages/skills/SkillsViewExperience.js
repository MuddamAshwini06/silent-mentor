import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SkillsViewExperience() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://silent-mentor-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        const skillsPosts = data.filter(p => p.category === "Skills");
        setPosts(skillsPosts);
      });
  }, []);

 return (
 <div className="skills-bg">
    <div className="form-container">
    <div className="skills-main-title">Skills Experiences</div>

    {posts.map(post => (
      <div
        key={post._id}
        className="skills-experience-card"
        onClick={() => navigate(`/skills/view/${post._id}`)}
      >
        <div className="skills-name">{post.name}</div>
        <div className="skills-company">{post.company}</div>
        <div className="skills-read-link">
          Click to read full details
        </div>
      </div>
    ))}
  </div>
  </div>
);

}
