import { useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from '../../../components/layout';

import 'react-quill/dist/quill.snow.css';
import styles from './course.module.css';
import axios from 'axios';

function Course() {
  
  const ReactQuill = dynamic(import('react-quill'), { ssr: false });

  const [title, setTitle] = useState('');
  const [quillForm, setQuillForm] = useState('');
  const [intro, setIntro] = useState(false);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');

 const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  
  formData.append("title", title);
  formData.append("desc", quillForm);
  formData.append("category", category)
  formData.append("video", file);
  formData.append("intro", intro);

  await axios.post("http://localhost:8000/api/courses/create", formData, { 
    headers: { 'Content-Type' : 'multipart/form-data' }
   }).catch(error => console.log(error));
  

   setTitle('');
   setQuillForm('');
   setIntro('');
   setFile(null);
   setCategory('');

 }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
      </Head>
      <div id={styles["dashboard"]}>
        <div className={`container flex ${styles.dashboard}`}>
          <main>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className={styles.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill
              theme="snow"
              className={styles.editor}
              value={quillForm}
              onChange={setQuillForm}
            />
          </main>
          <aside>
            <div className={`${styles.section} ${styles.publish}`}>
              <h3>Publish</h3>
              <div className={styles["form-control"]}>
                <label htmlFor="intro">Intro:</label>
                <select
                  name="intro"
                  id="intro"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                >
                  <option value="true">yes</option>
                  <option value="false">
                    no
                  </option>
                </select>
              </div>
              <div className={styles["form-control"]}>
                <label htmlFor="file">upload video</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="video"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button className="btn" onClick={handleSubmit}>Publish</button>
            </div>
            <div className={`${styles.section} categories`}>
              <h3>Categories</h3>
              <div className={styles["form-control"]}>
                <input
                  type="radio"
                  name="category"
                  id="beginner"
                  value="beginner"
                  checked={category === "beginner"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="beginner">beginner</label>
              </div>
              <div className={styles["form-control"]}>
                <input
                  type="radio"
                  name="category"
                  id="intermediate"
                  value="intermediate"
                  checked={category === "intermediate"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="intermediate">intermediate</label>
              </div>
              <div className={styles["form-control"]}>
                <input
                  type="radio"
                  name="category"
                  id="advanced"
                  value="advanced"
                  checked={category === "advanced"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="advanced">advanced</label>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Course;
