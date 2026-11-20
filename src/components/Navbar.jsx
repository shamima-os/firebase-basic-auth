// ------------------------------------------------------------
// Navbar.jsx
// The menu at the top of every page.
// It shows different links depending on login status
// (this is called "conditional rendering").
// ------------------------------------------------------------
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth); // tell Firebase to log the user out
    navigate("/login"); // then go to the Login page
  }

  return (
    <nav className="navbar">
      {/* <Link> changes the page WITHOUT reloading the browser */}
      <Link to="/">Home</Link>

      {user ? (
        // ---- Shown only when someone IS logged in ----
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        // ---- Shown only when nobody is logged in ----
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
