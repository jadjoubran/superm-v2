import { useNavigate, Navigate } from "react-router";

export default function Profile({ user, onUserLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onUserLogout();
    navigate("/");
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="profile-wrapper">
        <h1>Profile</h1>
        <title>Profile | SuperM</title>
        <p className="text-dimmed">
          You are logged in as <strong>{user.username}</strong>.
        </p>
        <div className="profile-buttons">
          <input
            type="button"
            value="Logout"
            className="btn"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
}
