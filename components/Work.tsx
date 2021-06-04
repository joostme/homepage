import { WorkEntry, WorkHistory } from '../lib/work';

export interface WorkProps {
    workHistory: WorkHistory;
}

export default function Work({ workHistory }: WorkProps) {
    return (<>
        <section className="my-10">
            <h2 className="text-2xl font-bold tracking-tight">Erfahrungen</h2>
            <h3 className="text-xl font-semibold tracking-tight mt-8">Beruflich</h3>
            <ul>
                {
                    workHistory.professional.map((workEntry, index) => <WorkEntryListItem key={index} workEntry={workEntry} />)
                }
            </ul>
            <h3 className="text-xl font-semibold tracking-tight mt-8">Akademisch</h3>
            <ul>
                {
                    workHistory.academic.map((workEntry, index) => <WorkEntryListItem key={index} workEntry={workEntry} />)
                }
            </ul>
        </section>
    </>)
}

const WorkEntryListItem = ({ workEntry }: { workEntry: WorkEntry }) => <li className="bg-white shadow rounded w-full my-4 p-4 flex flex-col">
    <h4 className="text-lg font-medium text-indigo-600">{workEntry.institution}</h4>
    <span>{workEntry.role}</span>
    <span className="text-gray-400">{workEntry.startDate} - {workEntry.endDate}</span>
</li>