import { getJSONFileContents } from './data';

export interface WorkEntry {
    institution: string;
    role: string;
    startDate: string;
    endDate: string | null;
}

export interface WorkHistory {
    professional: WorkEntry[];
    academic: WorkEntry[];
}

export function getWorkHistory(): WorkHistory {
    return getJSONFileContents('work.json')
}