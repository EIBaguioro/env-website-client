import Image from 'next/image';
import Link from 'next/link';

import styles from './section.module.css';

function Section(){
    return (
      <div className={styles.section}>
        <h3>the course that we offer</h3>
        <section className={`container flex ${styles.courses}`}>
          <div className={styles.course}>
            <Image
              placeholder='blur'
              blurDataURL='/images/beginner.webp'
              alt=''
              src='/images/beginner.webp'
              width={350}
              height={300}
            />
            <Link href='/course/beginner' className='course-title'>
              Beginner
            </Link>
          </div>
          <div className={styles.course}>
            <Image
              placeholder='blur'
              blurDataURL='/images/intermediate.webp'
              alt=''
              src='/images/intermediate.webp'
              width={350}
              height={300}
            />
            <Link href='/course/intermediate' className='course-title'>
              Intermediate
            </Link>
          </div>
          <div className={styles.course}>
            <Image
              placeholder='blur'
              blurDataURL='/images/advanced.webp'
              alt=''
              src='/images/advanced.webp'
              width={350}
              height={300}
            />
            <Link href='/course/advanced' className='course-title'>
              Advanced
            </Link>
          </div>
        </section>
      </div>
    );
}

export default Section;