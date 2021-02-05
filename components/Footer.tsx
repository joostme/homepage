import styles from './Footer.module.scss';

export default function Footer() {
    return (<>
        <footer className={styles.footer}>
            <p className={styles.footer__text}>Fonts and Icons from <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> / <a href="https://fontawesome.com/license">License</a>, <a href="http://konpa.github.io/devicon/" target="_blank">DevIcons</a> and <a href="https://icons8.de/license/" target="_blank">Icons8</a></p>
        </footer>
    </>)
}