import { useState } from 'react';

import Link from 'next/link';

function Topnav() {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <nav className='topnav'>
      <p className='logo'>ENV.</p>
      <ul className='navlist'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link href='/auth/login'>Login</Link>
            </li>
            <li>
              <Link href='/auth/signup'>Sign up</Link>
            </li>{' '}
          </>
        ) : (
          <li>HI USER</li>
        )}
      </ul>
    </nav>
  );
}

export default Topnav;
