import { Project } from '../lib/projects';
import styles from './Projects.module.scss';

export interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (<>
        <section className={styles.projects}>
            <h1 className={styles.projects__heading}>Projekte</h1>
            <ul className={styles.projects__list}>
                {
                    projects.map(project => <li className={styles.projects__listItem} key={project.title}>
                        <h1>
                            <a href={project.link} target="_blank">{project.title}</a>
                        </h1>
                        <p>{project.description}</p>
                        <ul className={styles.project__techList}>
                            {project.tags.map(tag => <li key={tag} className={styles.project__tech}>{tag}</li>)}
                        </ul>
                    </li>
                    )}
            </ul>
        </section>
    </>)
}