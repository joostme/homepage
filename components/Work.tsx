import styles from './Work.module.scss';

export default function Work() {
    return (<>
        <section className={styles.work}>
            <h1 className={styles.work__heading}>Erfahrungen</h1>
            <h3 className={styles.work__sectionHeading}>Beruflich</h3>
            <ul className={styles.work__list}>
                <li className={styles.work__listItem}>
                    <div className={styles.work__title}>
                        <h1 className={styles.work__company}>Holisticon AG</h1>
                        <h3 className={styles.work__year}>07.2018 - heute</h3>
                    </div>
                    <div>
                        <h4 className={styles.work__role}>IT Consultant</h4>
                    </div>
                </li>
                <li className={styles.work__listItem}>
                    <div className={styles.work__title}>
                        <h1 className={styles.work__company}>T-Systems Multimedia Solutions GmbH</h1>
                        <h3 className={styles.work__year}>03.2017 - 07.2018</h3>
                    </div>
                    <div>
                        <h4 className={styles.work__role}>Software Engineer</h4>
                    </div>
                </li>
                <li className={styles.work__listItem}>
                    <div className={styles.work__title}>
                        <h1 className={styles.work__company}>T-Systems International GmbH</h1>
                        <h3 className={styles.work__year}>10.2013 - 03.2017</h3>
                    </div>
                    <div>
                        <h4 className={styles.work__role}>Dualer Student</h4>
                    </div>
                </li>
            </ul>
            <h3 className={styles.work__sectionHeading}>Akademisch</h3>
            <ul className={styles.work__list}>
                <li className={styles.work__listItem}>
                    <div className={styles.work__title}>
                        <h1 className={styles.work__company}>Nordakademie Graduate School</h1>
                        <h3 className={styles.work__year}>2017 - heute</h3>
                    </div>
                    <div>
                        <h4 className={styles.work__role}>Master of Science Wirtschaftsinformatik / IT-Management</h4>
                    </div>
                </li>
                <li className={styles.work__listItem}>
                    <div className={styles.work__title}>
                        <h1 className={styles.work__company}>Nordakademie</h1>
                        <h3 className={styles.work__year}>2013 - 2017</h3>
                    </div>
                    <div>
                        <h4 className={styles.work__role}>Bachelor of Science Wirtschaftsinformatik</h4>
                    </div>
                </li>
            </ul>
        </section>
    </>)
}