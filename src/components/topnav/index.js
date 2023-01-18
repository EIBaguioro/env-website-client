import { useState } from 'react';

import Link from 'next/link';

import styles from './topnav.module.css';

function Topnav() {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <nav id={styles['topnav']}>
      <div className={`container flex ${styles.topnav}`}>
        <p className={styles.logo}>ENV.</p>
        <ul className={styles.navlist}>
          <li>
            <Link
              href='/'
            >
              Home
            </Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  href='/auth/login'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link href='/auth/signup'>Sign up</Link>
              </li>{' '}
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
