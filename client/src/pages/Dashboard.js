import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-bg">
      <div className="dashboard-card">

        <h1 className="dashboard-title">Dashboard</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/skills")}
        >
          Skills
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/career")}
        >
          Career
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/academics")}
        >
          Academics
        </button>

        <button
          className="dashboard-btn logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </div>
  );
}
