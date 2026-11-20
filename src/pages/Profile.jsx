// Profile page - PROTECTED. Shows the email and a Logout button.
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth); // log out from Firebase
    navigate("/login");
  }

  return (
    <div className="page">
      <h1>This is Profile Page</h1>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
