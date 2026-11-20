// ------------------------------------------------------------
// ProtectedRoute.jsx
// A "guard" for private pages (Dashboard, Profile).
// If you are logged in  -> show the page.
// If you are NOT logged in -> send you to /login.
// ------------------------------------------------------------
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // <Navigate> redirects to another page. "replace" means the
    // protected page is not saved in the browser's back history.
    return <Navigate to="/login" replace />;
  }

  // Logged in: show the page that was wrapped inside <ProtectedRoute>.
  return children;
}

export default ProtectedRoute;
