import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from "../../components/layout";

import styles from "./category.module.css";

function Category() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const router = useRouter();
  const { category } = router.query;

  const getCourses = async () => {
    try {
      const availableCourses = await axios.get(
        `http://localhost:8000/api/courses/filter?category=${category}`
      );
      return availableCourses.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const filterCourse = (id) => courses.filter((course) => course.id === id);

  const selectCourse = (id) => {
    const filteredCourse = filterCourse(id);

    setSelectedCourse(...filteredCourse);
  };

  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  useEffect(() => {
    getCourses().then((availableCourses) => {
      setCourses(availableCourses);
      if (availableCourses.length > 0) setSelectedCourse(availableCourses[0]);
    });
  }, []);

  return (
    <Layout>
      <div id={styles["category"]}>
        <div className={`container flex ${styles.category}`}>
          {isObjectEmpty(selectedCourse) ? (
            <p>No Available Courses</p>
          ) : (
            <>
              <main>
                <video
                  src={selectedCourse.videoUrl}
                  controls
                  muted
                  loop
                  width="100%"
                ></video>
                <article className={styles.description}>
                  <h3>{selectedCourse.title}</h3>
                  <p>{getText(selectedCourse.desc)}</p>
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Category;
