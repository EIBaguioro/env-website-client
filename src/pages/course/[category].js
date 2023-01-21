import Layout from '../../components/layout';

import styles from './category.module.css';

function Category() {
  return (
    <Layout>
      <div id={styles['category']}>
        <div className={`container flex ${styles.category}`}>
          <main>
            <video controls autoPlay muted loop width='100%'>
              <source src='/videos/sample.mp4' type='mp4' />
            </video>
            <article className={styles.description}>
              <h3>Video Title Here</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis minus animi alias provident incidunt eaque possimus,
                earum itaque doloremque assumenda ex asperiores nobis repellat
                repudiandae fuga a illo, facilis repellendus odio dolore
                inventore sint ratione quod debitis! Numquam commodi dolor
                facilis eaque, exercitationem consectetur voluptas eius sint,
                recusandae sequi adipisci at hic deleniti harum laboriosam
                repudiandae quae maiores ad fugit expedita voluptates. Sit natus
                perspiciatis fugit error, modi delectus sed quidem, dolor,
                explicabo temporibus rerum cum cupiditate velit. Neque sunt a
                necessitatibus vero sint facere odit illum ea vel, vitae
                cupiditate reiciendis quos rerum? Ab ad iure corporis
                perferendis odio?
              </p>
            </article>
          </main>
          <aside className={styles.sidenav}>
            <h3>Course Content</h3>
            <ul>
              <li>Video Title Here</li>
              <li>Video Title Here</li>
              <li>Video Title Here</li>
              <li>Video Title Here</li>
              <li>Video Title Here</li>
            </ul>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Category;
