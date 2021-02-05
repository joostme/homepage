import fs from 'fs';
import path from 'path';

export interface Skill {
    name: string;
    icon: string;
}

export function getSkills(): any[] {
    const skillsPath = path.join(process.cwd(), 'data', 'skills.json');

    const fileContents = fs.readFileSync(skillsPath, 'utf8');

    return JSON.parse(fileContents);
}