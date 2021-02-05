import { WorkHistory } from '../lib/work';
import styles from './Work.module.scss';

export interface WorkProps {
    workHistory: WorkHistory;
}

export default function Work({ workHistory }: WorkProps) {
    return (<>
        <section className={styles.work}>
            <h1 className={styles.work__heading}>Erfahrungen</h1>
            <h3 className={styles.work__sectionHeading}>Beruflich</h3>
            <ul className={styles.work__list}>
                {
                    workHistory.professional.map((workEntry, index) => <li className={styles.work__listItem} key={index}>
                        <div className={styles.work__title}>
                            <h1 className={styles.work__company}>{workEntry.institution}</h1>
                            <h3 className={styles.work__year}>{workEntry.startDate} - {workEntry.endDate}</h3>
                        </div>
                        <div>
                            <h4 className={styles.work__role}>{workEntry.role}</h4>
                        </div>
                    </li>)
                }
            </ul>
            <h3 className={styles.work__sectionHeading}>Akademisch</h3>
            <ul className={styles.work__list}>
                {
                    workHistory.academic.map((workEntry, index) => <li className={styles.work__listItem} key={index}>
                        <div className={styles.work__title}>
                            <h1 className={styles.work__company}>{workEntry.institution}</h1>
                            <h3 className={styles.work__year}>{workEntry.startDate} - {workEntry.endDate}</h3>
                        </div>
                        <div>
                            <h4 className={styles.work__role}>{workEntry.role}</h4>
                        </div>
                    </li>)
                }
            </ul>
        </section>
    </>)
}