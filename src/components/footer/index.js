import styles from './footer.module.css';
function Footer () {

    const currentYear = () => {
        const date = new Date().getFullYear();
        return date;
    }

    return <footer id={styles["footer"]}>
        {currentYear()} all rights reserved. ENV company.
    </footer>
}

export default Footer;