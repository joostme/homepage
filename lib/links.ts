import { getJSONFileContents } from './data';

export interface Link {
    name: string;
    icon: string;
    link: string;
}

export function getLinks(): Link[] {
    return getJSONFileContents('links.json')
}