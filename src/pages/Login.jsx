// ------------------------------------------------------------
// Login page - sign in with email + password.
// ------------------------------------------------------------
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../utils/errorMessages";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Already logged in? Go straight to the dashboard.
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleLogin(e) {
    e.preventDefault(); // stop the form from reloading the page
    setError("");
    setBusy(true);
    try {
      // Ask Firebase to check the email and password.
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={busy}>
          {busy ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        No account yet? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
