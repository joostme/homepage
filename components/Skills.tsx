import { Skill } from '../lib/skills';

export interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    return (<>
        <section className="my-10">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Skills</h2>
            <ul className="grid justify-items-center gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                {
                    skills.map(skill => <li key={skill.name} className="bg-white rounded shadow p-4 flex flex-col text-center w-28">
                        <i className={`${skill.icon} text-3xl text-indigo-600 mb-2`}></i>
                        <span>{skill.name}</span>
                    </li>
                    )}
            </ul>
        </section>
    </>)
}