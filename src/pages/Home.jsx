// Home page - public, anyone can see it.
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      {user ? (
        <p>You are logged in as {user.email}</p>
      ) : (
        <p>You are not logged in. Please login or register.</p>
      )}
    </div>
  );
}

export default Home;
