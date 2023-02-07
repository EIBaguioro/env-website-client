import { useState } from "react";

import Link from "next/link";
import axios from "axios";

import styles from "./signup.module.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/users/create", formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div id={styles["signup"]}>
      <div className={`container ${styles.signup}`}>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            autoComplete="false"
            onChange={handleInputChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <button className="btn">Sign up</button>
          <p>
            You don't have an account yet. <Link href="/auth/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
