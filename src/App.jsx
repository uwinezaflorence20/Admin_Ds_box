import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Layout2 from "./Components/Layout2";
import AdminSignIn from "./Components/AdminSignIn";
import AdminDashboard from "./Components/AdminDashboard";
import AdminSignUp from "./Components/AdminSignUp";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
      <BrowserRouter>
        <Routes>
          {/* Parent Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<AdminSignIn />} />
            <Route path="adminsignin" element={<AdminSignIn />} />
            <Route path="adminsignup" element={<AdminSignUp />} />
            
            {/* Protect Admin Dashboard route */}
            <Route path="admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Route>

          {/* Student Layout */}
          <Route path="/student" element={<Layout2 />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
