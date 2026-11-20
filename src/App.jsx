// ------------------------------------------------------------
// App.jsx
// The "map" of our app: which URL shows which page.
// ------------------------------------------------------------
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* Navbar is outside <Routes>, so it appears on every page */}
      <Navbar />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected pages: wrapped in <ProtectedRoute> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Any unknown URL */}
        <Route path="*" element={<div className="page"><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;
