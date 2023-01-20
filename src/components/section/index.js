import Image from 'next/image';
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
            <p className='course-title'>Beginner</p>
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
            <p className='course-title'>Intermediate</p>
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
            <p className='course-title'>Advanced</p>
          </div>
        </section>
      </div>
    );
}

export default Section;