// ------------------------------------------------------------
// Register page - create a new account with email + password.
// ------------------------------------------------------------
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../utils/errorMessages";

function Register() {
  // useState stores what the user types in the inputs.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Already logged in? No need to register again.
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleRegister(e) {
    e.preventDefault(); // stop the form from reloading the page
    setError("");
    setBusy(true);
    try {
      // Ask Firebase to create the account. Firebase also logs the
      // new user in automatically.
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page">
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={busy}>
          {busy ? "Registering..." : "Register"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
