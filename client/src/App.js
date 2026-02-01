import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

/* Skills */
import SkillsHome from "./pages/skills/SkillsHome";
import SkillsViewExperience from "./pages/skills/SkillsViewExperience";
import SkillsPostExperience from "./pages/skills/SkillsPostExperience";
import SkillsExperienceDetails from "./pages/skills/SkillsExperienceDetails";
import SkillsViewResources from "./pages/skills/SkillsViewResources";


/* Career */
import CareerHome from "./pages/career/CareerHome";
import CareerViewExperience from "./pages/career/CareerViewExperience";
import CareerPostExperience from "./pages/career/CareerPostExperience";
import CareerExperienceDetails from "./pages/career/CareerExperienceDetails";
import CareerViewResources from "./pages/career/CareerViewResources";

/* Academics */
import AcademicsHome from "./pages/academics/AcademicsHome";
import AcademicsViewExperience from "./pages/academics/AcademicsViewExperience";
import AcademicsPostExperience from "./pages/academics/AcademicsPostExperience";
import AcademicsExperienceDetails from "./pages/academics/AcademicsExperienceDetails";
import AcademicsViewResources from "./pages/academics/AcademicsViewResources";

/* Auth Protection */
const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token")
    ? children
    : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

        {/* Skills */}
        <Route path="/skills" element={<PrivateRoute><SkillsHome /></PrivateRoute>} />
        <Route path="/skills/view" element={<PrivateRoute><SkillsViewExperience /></PrivateRoute>} />
        <Route path="/skills/view/:id" element={<PrivateRoute><SkillsExperienceDetails /></PrivateRoute>} />
        <Route path="/skills/view/:id/resources" element={<PrivateRoute><SkillsViewResources /></PrivateRoute>} />

        <Route path="/skills/post" element={<PrivateRoute><SkillsPostExperience /></PrivateRoute>} />

        {/* Career */}
        <Route path="/career" element={<PrivateRoute><CareerHome /></PrivateRoute>} />
        <Route path="/career/view" element={<PrivateRoute><CareerViewExperience /></PrivateRoute>} />
        <Route path="/career/view/:id" element={<PrivateRoute><CareerExperienceDetails /></PrivateRoute>} />
        <Route path="/career/view/:id/resources" element={<PrivateRoute><CareerViewResources /></PrivateRoute>} />
      
        <Route path="/career/post" element={<PrivateRoute><CareerPostExperience /></PrivateRoute>} />

        {/* Academics */}
        <Route path="/academics" element={<PrivateRoute><AcademicsHome /></PrivateRoute>} />
<Route path="/academics/view" element={<PrivateRoute><AcademicsViewExperience /></PrivateRoute>} />
<Route path="/academics/view/:id" element={<PrivateRoute><AcademicsExperienceDetails /></PrivateRoute>} />
<Route path="/academics/view/:id/resources" element={<PrivateRoute><AcademicsViewResources /></PrivateRoute>} />
<Route path="/academics/post" element={<PrivateRoute><AcademicsPostExperience /></PrivateRoute>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
