import { useNavigate } from "react-router-dom";

export default function SkillsHome() {
  const navigate = useNavigate();

  return (
    <div className="skills-bg">
    <div className="center-container">
      <div className="page-title">Skills</div>

      <div className="button-group">
        <button className="btn" onClick={() => navigate("/skills/view")}>
          View Experiences
        </button>

        <button className="btn" onClick={() => navigate("/skills/post")}>
          Post Experience
        </button>

        <button className="btn btn-back" onClick={() => navigate("/dashboard")}>
          Back
        </button>
      </div>
    </div>
    </div>
  );
}
