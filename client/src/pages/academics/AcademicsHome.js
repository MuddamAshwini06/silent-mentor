import { useNavigate } from "react-router-dom";

export default function AcademicsHome() {
  const navigate = useNavigate();

  return (
    <div className="academics-bg">
    <div className="center-container">
      <div className="page-title">Academics</div>

      <div className="button-group">
        <button className="btn" onClick={() => navigate("/academics/view")}>
          View Experiences
        </button>

        <button className="btn" onClick={() => navigate("/academics/post")}>
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
