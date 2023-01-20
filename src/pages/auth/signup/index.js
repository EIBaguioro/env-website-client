import Link from 'next/link';
import styles from './signup.module.css';

function Signup() {
  return (
    <div id={styles['signup']}>
      <div className={`container ${styles.signup}`}>
        <form>
          <h3>Sign Up</h3>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            autoComplete='false'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='password'
          />
          <button className='btn'>Sign up</button>
          <p>
            You don't have an account yet. <Link href='/auth/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
