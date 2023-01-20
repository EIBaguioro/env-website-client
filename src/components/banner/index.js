import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './banner.module.css';

function Banner() {

    const [isButtonActive, setIsButtonActive] = useState(true);
    const [bannerText, setBannerText] = useState(
      'We will help you get where you want to be'
    );
    const [bannerImage, setBannerImage] = useState('home-image.png');

  return (
    <div id='banner'>
      <div className={`container flex ${styles.banner}`}>
        <div className={styles['call-to-action']}>
          <p>{bannerText}</p>
          {isButtonActive && (
            <Link href='/auth/signup' className='btn'>
              Sign up
            </Link>
          )}
        </div>
        <div className={styles['image-container']}>
          <Image
            placeholder='blur'
            blurDataURL={`/images/${bannerImage}`}
            src={`/images/${bannerImage}`}
            className='banner-image'
            width={300}
            height={300}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
