import { Project } from '../lib/projects';
export interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (<>
        <section className="my-10">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Projekte</h2>
            <ul className="flex flex-col">
                {
                    projects.map(project => <li key={project.title} className="bg-white rounded shadow p-4 my-2">
                        <h3>
                            <a href={project.link} target="_blank" className="text-xl font-bold text-indigo-600 hover:underline">{project.title}</a>
                        </h3>
                        <p className="mt-2 mb-4">{project.description}</p>
                        <ul className="flex flex-wrap -m-2">
                            {project.tags.map(tag => <li key={tag} className="rounded m-2 text-gray-500 font-semibold">{tag}</li>)}
                        </ul>
                    </li>
                    )}
            </ul>
        </section>
    </>)
}