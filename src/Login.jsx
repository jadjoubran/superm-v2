import { useId } from "react";

export default function Login() {
  const emailId = useId();
  const passwordId = useId();
  return (
    <>
      <div className="profile-wrapper">
        <h1>Login</h1>
        <p className="text-dimmed">
          Login using test@example.com and any password
        </p>
        <form>
          <label className="label" htmlFor={emailId}>
            Email<span className="required">*</span>:
          </label>
          <input
            id={emailId}
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label" htmlFor={passwordId}>
            Password<span className="required">*</span>:
          </label>
          <input
            id={passwordId}
            type="password"
            className="input"
            placeholder="Password"
          />
          <div className="form-buttons">
            <input type="submit" value="Login" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}
