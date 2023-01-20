import Link from 'next/link';
import styles from './login.module.css';

function Login() {
    return (
      <div id={styles['login']}>
        <div className={`container ${styles.login}`}>
          <form>
            <h3>Login</h3>
            <input type='email' name='email' id='email' placeholder='email' />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
            />
            <button className='btn'>Login</button>
            <p>
              You don't have an account yet. <Link href="/auth/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Login;