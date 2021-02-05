import { getJSONFileContents } from './data';

export interface Skill {
    name: string;
    icon: string;
}

export function getSkills(): Skill[] {
    return getJSONFileContents('skills.json')
}