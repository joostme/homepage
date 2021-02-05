import fs from 'fs';
import path from 'path';

export function getJSONFileContents<T = any>(filename: string): T {
    const skillsPath = path.join(process.cwd(), 'data', filename);

    const fileContents = fs.readFileSync(skillsPath, 'utf8');

    return JSON.parse(fileContents);
}