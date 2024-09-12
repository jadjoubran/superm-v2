export default function Profile() {
  return (
    <>
      <div className="profile-wrapper">
        <h1>Profile</h1>
        <p className="text-dimmed">You are logged in as test@example.com.</p>
        <div className="profile-buttons">
          <input type="button" value="Logout" className="btn" />
        </div>
      </div>
    </>
  );
}
