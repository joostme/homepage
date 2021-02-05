import { Skill } from '../lib/skills';
import styles from './Skills.module.scss';

export interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    return (<>
        <section className={styles.skills}>
            <h1 className={styles.skills__heading}>Skills</h1>
            <ul className={styles.skills__list}>
                {
                    skills.map(skill => <li className={styles.skills__listItem} key={skill.name}>
                        <i className={`${skill.icon} ${styles.skills__icon}`}></i>
                        <span>{skill.name}</span>
                    </li>
                )}
            </ul>
        </section>
    </>)
}