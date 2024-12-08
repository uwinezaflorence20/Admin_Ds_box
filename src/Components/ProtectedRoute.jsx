import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken"); // Check if token exists

  if (!authToken) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/adminsignin" />;
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;
