import { Link } from '../lib/links';
import styles from './Header.module.scss';

export interface HeaderProps {
    links: Link[];
}

export default function Header({ links }: HeaderProps) {
    return (
        <header className="header">
            <nav className={styles.header__nav}>
                <ul className={styles.nav__list}>
                    {
                        links.map((link, index) => <li className={styles.nav__listItem} key={index}>
                            <a href={link.link} target="_blank" className={`${link.icon} ${styles.nav__icon}`} title={link.name}></a>
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    );
}