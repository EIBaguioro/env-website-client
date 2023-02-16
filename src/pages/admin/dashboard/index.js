import { useEffect, useState } from "react";

import Link from "next/link";

import axios from "axios";

import Layout from "../../../components/layout";
import { ProtectedRoute } from "@/components/protected-route/protected-route";

import styles from "./dashboard.module.css";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

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

  const deleteCourses = async () => {

    try {

      const ids = selectedCourses.map(courseObject => courseObject.id);

      const response = await axios.delete('http://localhost:8000/api/courses/delete', { data: ids});
      setSelectedCourses([]);

    } catch (error) {
      
      console.log(error);

    }

  }

  console.log(selectedCourses);

  useEffect(() => {
    getAllCourses().then((response) => setCourses(response));
  }, [selectedCourses]);

  return (
    <ProtectedRoute>
      <Layout>
        <div id="dashboard">
          <div className={`container ${styles.dashboard}`}>
            <h3>Videos</h3>
            {selectedCourses.length > 0 && (
              <div className={`flex ${styles.options}`}>
                <span>{selectedCourses.length} selected</span>
                {selectedCourses.length === 1 && (
                  <Link href={`course/edit/${selectedCourses[0].id}`}>
                    Edit
                  </Link>
                )}
                <button onClick={deleteCourses}>Delete</button>
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
    </ProtectedRoute>
  );
}

export default Course;
