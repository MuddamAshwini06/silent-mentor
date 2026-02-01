import { useNavigate } from "react-router-dom";

export default function CareerHome() {
  const navigate = useNavigate();

  return (
    
    <div className="center-container">
      <div className="page-title">Career</div>

      <div className="button-group">
        <button className="btn" onClick={() => navigate("/career/view")}>
          View Experiences
        </button>

        <button className="btn" onClick={() => navigate("/career/post")}>
          Post Experience
        </button>

        <button className="btn btn-back" onClick={() => navigate("/dashboard")}>
          Back
        </button>
      </div>
    </div>
  );
}
