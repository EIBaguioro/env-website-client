import { useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from '../../../components/layout';

import 'react-quill/dist/quill.snow.css';
import styles from './dashboard.module.css';

function Course() {
  
  const ReactQuill = dynamic(import('react-quill'), { ssr: false });
  
  const [value, setValue] = useState('');

  return (
    <Layout>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css'
        />
      </Head>
      <div id={styles['dashboard']}>
        <div className={`container flex ${styles.dashboard}`}>
          <main>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Title'
              className={styles.title}
            />
            <ReactQuill
              theme='snow'
              className={styles.editor}
              value={value}
              onChange={setValue}
            />
            ;
          </main>
          <aside>
            <div className={`${styles.section} ${styles.publish}`}>
              <h3>Publish</h3>
              <div className={styles['form-control']}>
                <label htmlFor='intro'>Intro:</label>
                <select name='intro' id='intro'>
                  <option value='yes'>yes</option>
                  <option value='no'>no</option>
                </select>
              </div>
              <div className={styles['form-control']}>
                <label htmlFor='file'>upload video</label>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  name='file'
                  id='file'
                />
              </div>
              <button className="btn">Publish</button>
            </div>
            <div className={`${styles.section} categories`}>
              <h3>Categories</h3>
              <div className={styles['form-control']}>
                <input
                  type='radio'
                  name='category'
                  id='beginner'
                  value='beginner'
                />
                <label htmlFor='beginner'>beginner</label>
              </div>
              <div className={styles['form-control']}>
                <input
                  type='radio'
                  name='category'
                  id='intermediate'
                  value='intermediate'
                />
                <label htmlFor='intermediate'>intermediate</label>
              </div>
              <div className={styles['form-control']}>
                <input
                  type='radio'
                  name='category'
                  id='advanced'
                  value='advanced'
                />
                <label htmlFor='advanced'>advanced</label>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Course;
