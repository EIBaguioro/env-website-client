import { useState } from "react";

import Link from "next/link";

import axios from "axios";

import styles from "./login.module.css";

function Login() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === "" || password === "") return setError({message: "Please provide both the email and password"});

    await axios
      .post("http://localhost:8000/api/auth/login", { email, password })
      .then(({ data }) => {
        setUser(data);
        setError({})
        setSuccess(true);
      })
      .catch((error) => {
        const { response } = error;
        console.log(response.data);
        setError(response.data);
      });
      setEmail("");
      setPassword("");
  };

  console.log(user)

  return (
    <div id={styles["login"]}>
      <div className={`container ${styles.login}`}>
        <form>
          <h3>Login</h3>
          {error && <p className="error">{error.message}</p> }
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
          <p>
            You don't have an account yet.{" "}
            <Link href="/auth/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
