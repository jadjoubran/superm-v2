import { use, useEffect, useId, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { callApi } from "./lib/fetcher";

export default function Login() {
  const { setUser } = use(UserContext);
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);

  const mutation = useMutation({
    mutationFn: (data) => {
      return callApi("post", "rpc/login", {
        u_email: data.email,
        u_password: data.password,
      });
    },
    onError: (error) => {
      console.log(error);
      setErrorMessage(error.message);
    },
    onSuccess: (data) => {
      if (data?.message) {
        setErrorMessage(data.message);
        return;
      }
      if (data?.[0]) {
        setUser(data[0]);
        navigate("/profile");
      }
    },
  });

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    setErrorMessage("");
    const formData = new FormData(event.target);
    mutation.mutate({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  }

  return (
    <>
      <div className="profile-wrapper">
        <h1>Login</h1>
        <p className="text-dimmed">
          Login using test@example.com and any password.
        </p>
        <form onSubmit={handleLogin}>
          <label className="label" htmlFor={emailId}>
            Email<span className="required">*</span>:
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            disabled={mutation.isPending}
            ref={emailRef}
          />
          <label className="label" htmlFor={passwordId}>
            Password<span className="required">*</span>:
          </label>
          <input
            id={passwordId}
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            disabled={mutation.isPending}
          />
          <p className="login-error">{errorMessage}</p>
          <div className="form-buttons">
            <input
              type="submit"
              value="Login"
              className="btn"
              disabled={mutation.isPending}
            />
          </div>
        </form>
      </div>
    </>
  );
}
