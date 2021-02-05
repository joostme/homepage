import styles from './Skills.module.scss';

export default function Skills() {
    return (<>
        <section className={styles.skills}>
            <h1 className={styles.skills__heading}>Skills</h1>
            <ul className={styles.skills__list}>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-html5-plain ${styles.skills__icon}`}></i>
                    <span>HTML5</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-css3-plain ${styles.skills__icon}`}></i>
                    <span>CSS3</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-javascript-plain ${styles.skills__icon}`}></i>
                    <span>JavaScript</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-typescript-plain ${styles.skills__icon}`}></i>
                    <span>TypeScript</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-nodejs-plain ${styles.skills__icon}`}></i>
                    <span>NodeJS</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-angularjs-plain ${styles.skills__icon}`}></i>
                    <span>Angular 2+</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-react-original ${styles.skills__icon}`}></i>
                    <span>ReactJS</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-vuejs-plain ${styles.skills__icon}`}></i>
                    <span>VueJS</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-webpack-plain ${styles.skills__icon}`}></i>
                    <span>Webpack</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-jasmine-plain ${styles.skills__icon}`}></i>
                    <span>Jasmine</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-jest ${styles.skills__icon}`}></i>
                    <span>Jest</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-protractor-plain ${styles.skills__icon}`}></i>
                    <span>Protractor</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-bootstrap-plain ${styles.skills__icon}`}></i>
                    <span>Bootstrap</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-sass-original ${styles.skills__icon}`}></i>
                    <span>SASS</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-less-plain-wordmark ${styles.skills__icon}`}></i>
                    <span>LESS</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-git-plain ${styles.skills__icon}`}></i>
                    <span>Git</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-github-original ${styles.skills__icon}`}></i>
                    <span>Github</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-icons8-travis-ci ${styles.skills__icon}`}></i>
                    <span>Travis CI</span>
                </li>
                <li className={styles.skills__listItem}>
                    <i className={`devicon-visualstudio-plain ${styles.skills__icon}`}></i>
                    <span>VSCode</span>
                </li>
            </ul>
        </section>
    </>)
}