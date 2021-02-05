import styles from './About.module.scss';

export default function About() {
    return (<>
        <section className={styles.about}>
            <h1 className={styles.about__heading}>Über mich</h1>
            <p>Moin! Ich bin Joost.</p>
            <p>Ich bin leidenschaftlicher Softwareentwickler mit einem Fokus auf JavaScript und Frontend Frameworks wie <strong>Angular</strong>, <strong>ReactJS</strong> und <strong>VueJS</strong>.</p>
            <p>In meiner Freizeit informiere ich mich gerne über neue Entwicklungen um JavaScript oder Web Technologien allgemein. Zu aktuellen Themen gehören beispielsweise <strong>Functional Programming</strong>, <strong>GraphQL</strong> oder <strong>Redux</strong>.</p>
        </section>
    </>)
}