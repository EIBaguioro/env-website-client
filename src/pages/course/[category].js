import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Layout from '../../components/layout';

import styles from './category.module.css';

function Category() {

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const getCourses = async () => {
    
    try {
      const availableCourses = await axios.get(
        `http://localhost:8000/api/courses/filter?category="beginner"`
      );
      return availableCourses.data;
    } catch(error) {
      console.log(error)
    }
  }

  const filterCourse = (id) => courses.filter( course => course.id === id);

  const selectCourse = (id) => {

    const filteredCourse = filterCourse(id);

    setSelectedCourse(...filteredCourse);

  }

  useEffect(() => {
    getCourses().then(availableCourses => {
      setCourses(availableCourses);
      setSelectedCourse(availableCourses[0]);
    });
  }, []);

  return (
    <Layout>
      <div id={styles["category"]}>
        <div className={`container flex ${styles.category}`}>
          <main>
            <video
              src={selectedCourse.videoUrl}
              controls
              muted
              loop
              width="100%"
            >
            </video>
            <article className={styles.description}>
              <h3>{selectedCourse.title}</h3>
              <p>{selectedCourse.desc}</p>
              {/* <button className="btn">Enroll to this course</button> */}
            </article>
          </main>
          <aside className={styles.sidenav}>
            <h3>Course Content</h3>
            <ul>
              {courses.map(({ id, title }) => {
                return (
                  <li key={id} onClick={() => selectCourse(id)}>
                    {title}
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </Layout>
  );
}


export default Category;
