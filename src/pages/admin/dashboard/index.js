import { useEffect, useState } from 'react';

import axios from 'axios';

import Layout from '../../../components/layout';

import styles from './dashboard.module.css';

function Course() {

  const [courses, setCourses] = useState([]);

  const getAllCourses = async () => {
    try {
      const availableCourses =  await axios.get("http://localhost:8000/api/courses");
      return availableCourses.data;
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllCourses().then(response => setCourses(response));
  }, []) 

  console.log(courses);

  return (
    <Layout>
      <div id='dashboard'>
        <div className={`container ${styles.dashboard}`}>
          <h3>Videos</h3>
          <div className={`flex ${styles.options}`}>
            <span>selected</span>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <table className={styles.videos}>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' name='selectAll' id='selectAll' />
                </th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                courses.map((course) => {

                  const { title, category, createdAt } = course;

                 return (
                   <tr>
                     <td>
                       <input type="checkbox" name="" id="" />
                     </td>
                     <td>{title}</td>
                     <td>{category}</td>
                     <td>{createdAt}</td>
                   </tr>
                 );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Course;
