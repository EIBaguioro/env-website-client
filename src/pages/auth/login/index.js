import Link from "next/link";

import styles from "./login.module.css";
import { useGlobalContext } from "@/components/context";

function Login() {

  const { error, email, setEmail, password, setPassword, handleSubmit } = useGlobalContext();

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
