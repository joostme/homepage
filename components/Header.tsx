import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className="header">
            <nav className={styles.header__nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__listItem}>
                        <a href="https://github.com/joostme" target="_blank" className={`icon-github-circled ${styles.nav__icon}`}></a>
                    </li>
                    <li className={styles.nav__listItem}>
                        <a href="https://www.xing.com/profile/Joost_Zoellner" target="_blank" className={`icon-xing ${styles.nav__icon}`}></a>
                    </li>
                    <li className={styles.nav__listItem}>
                        <a href="https://www.linkedin.com/in/joostzoellner" target="_blank" className={`icon-linkedin-squared ${styles.nav__icon}`}></a>
                    </li>
                    <li className={styles.nav__listItem}>
                        <a href="mailto:work@joost.io" className={`icon-mail-alt ${styles.nav__icon}`}></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}