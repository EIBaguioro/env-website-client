import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './topnav.module.css';

function Topnav() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

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
          <li>
            <Link
              href="/admin/dashboard"
              className={
                currentPath === "/admin/dashboard" ? styles.active : ""
              }
            >
              dashboard
            </Link>
          </li>
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
            <li className={styles.greeting}>HI USER</li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Topnav;
