import { getJSONFileContents } from './data';

export interface Project {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export function getProjects(): Project[] {
    return getJSONFileContents('projects.json')
}