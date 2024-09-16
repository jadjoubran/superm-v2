import { use, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = use(UserContext);
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
