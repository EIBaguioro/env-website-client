import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';

import styles from './topnav.module.css';

function Topnav() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const { category } = router.query;

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    setIsLoggedin(false);
    router.push('/');
  }

  useEffect(() => {
    setUser(() => JSON.parse(localStorage.getItem('user')));
    if(localStorage.getItem('accessToken')) {

      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      }

       axios.get("http://localhost:8000/api/auth/token", config).then((response) => {
        console.log(response)
      }).catch((error) => {  
        setIsLoggedin(false)
        localStorage.removeItem('accessToken');
      })

      setIsLoggedin(true);
    }
  }, [])

  console.log(category);

  return (
    <nav id={styles["topnav"]}>
      <div className={`container flex ${styles.topnav}`}>
        <Link href="/" className={styles.logo}>
          ENV.
        </Link>
        <ul className={styles.navlist}>
          <li>
            <Link href="/" className={currentPath === "/" ? styles.active : ""}>
              Home
            </Link>
          </li>
          {isLoggedIn && user.isAdmin && (
            <>
              <li>
                <Link
                  href="/admin/dashboard"
                  className={
                    currentPath === "/admin/dashboard" ? styles.active : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/course"
                  className={
                    currentPath === "/admin/course" ? styles.active : ""
                  }
                >
                  Add Course
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link
                  href="/course/beginner"
                  className={category === "beginner" ? styles.active : ""}
                >
                  Beginner
                </Link>
              </li>
              <li>
                <Link
                  href="/course/intermediate"
                  className={category === "intermediate" ? styles.active : ""}
                >
                  Intermediate
                </Link>
              </li>
              <li>
                <Link
                  href="/course/advanced"
                  className={category === "advanced" ? styles.active : ""}
                >
                  Advanced
                </Link>
              </li>
              <li>
                <a href="#" onClick={logout}>
                  Log out
                </a>
              </li>
            </>
          )}
          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className={currentPath === "/auth/login" ? styles.active : ""}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/signup"
                  className={
                    currentPath === "/auth/signup" ? styles.active : ""
                  }
                >
                  Sign up
                </Link>
              </li>{" "}
            </>
          ) : (
            <li className={styles.greeting}>
              <b>Hi, {user?.name || "user"}</b>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Topnav;
