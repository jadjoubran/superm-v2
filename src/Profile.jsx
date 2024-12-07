import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Profile({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
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
