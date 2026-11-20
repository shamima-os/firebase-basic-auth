// Dashboard page - PROTECTED (only for logged-in users).
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Welcome to Dashboard</h1>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </div>
  );
}

export default Dashboard;
