import Layout from '../../../components/layout';

import styles from './dashboard.module.css';

function Course() {
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
                <th>Visibility</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Random Video</td>
                <td>Beginner</td>
                <td>Public</td>
                <td>MM-DD-YYYY HH:MM:SS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Course;
