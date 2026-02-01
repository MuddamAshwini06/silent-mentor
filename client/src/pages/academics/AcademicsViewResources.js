import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AcademicsViewResources() {
  const { id } = useParams();
  const [resources, setResources] = useState("");

  useEffect(() => {
    fetch("http://https://silent-mentor-api.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => {
        const post = data.find(p => p._id === id);
        if (post && post.resources) {
          setResources(post.resources);
        }
      });
  }, [id]);

  return (
   <div className="academics-bg">
    <div className="form-container">
      <h2>Resources</h2>

      {resources ? (
        <p style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
          {resources}
        </p>
      ) : (
        <p>No resources shared.</p>
      )}
    </div>
    </div>
  );
}
