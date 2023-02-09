import { useEffect, useState } from "react";

import axios from "axios";

import Layout from "../../../components/layout";

import styles from "./dashboard.module.css";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleChange = (event) => {
    const item = event.target;

    const isItemChecked = item.checked;
    const itemId = item.dataset.id;
    const itemName = item.name;

    if (isItemChecked) {
      return setSelectedCourses((currentData) => [
        ...currentData,
        { id: itemId, name: itemName },
      ]);
    }

    const filteredItems = selectedCourses.filter((existingItem) => {
      return existingItem.id !== itemId;
    });

    setSelectedCourses([...filteredItems]);
  };

  const getAllCourses = async () => {
    try {
      const availableCourses = await axios.get(
        "http://localhost:8000/api/courses"
      );
      return availableCourses.data;
    } catch (error) {
      console.error(error);
    }
  };

  console.log(selectedCourses);

  useEffect(() => {
    getAllCourses().then((response) => setCourses(response));
  }, []);

  return (
    <Layout>
      <div id="dashboard">
        <div className={`container ${styles.dashboard}`}>
          <h3>Videos</h3>
          {selectedCourses.length > 0 && (
            <div className={`flex ${styles.options}`}>
              <span>{selectedCourses.length} selected</span>
              {selectedCourses.length === 1 && <button>Edit</button>}
              <button>Delete</button>
            </div>
          )}
          <table className={styles.videos}>
            <thead>
              <tr>
                <th> </th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => {
                const { id, title, category, createdAt } = course;

                return (
                  <tr key={id}>
                    <td>
                      <input
                        type="checkbox"
                        name={title}
                        onChange={handleChange}
                        data-id={id}
                      />
                    </td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Course;
