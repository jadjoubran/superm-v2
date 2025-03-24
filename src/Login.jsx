import { useEffect, useId, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { callApi } from "./fetcher";

export default function Login({ onUserLogin }) {
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
                onUserLogin(data[0]);
                navigate("/profile");
            }
        },
    });

    useEffect(() => {
        emailRef.current.focus();
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
                <title>Login | SuperM</title>
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
                        autoComplete="email"
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
                        autoComplete="current-password"
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
