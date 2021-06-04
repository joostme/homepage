import { Link } from '../lib/links';
export interface HeaderProps {
    links: Link[];
}

export default function Header({ links }: HeaderProps) {
    return (
        <header className="w-full">
            {/* <nav className="px-3 py-2">
                <ul className="flex items-center container mx-auto">
                    {
                        links.map((link, index) => <li key={index} className="mx-2">
                            <a href={link.link} target="_blank" className={`${link.icon} text-3xl text-indigo-600`} title={link.name}><span className="sr-only">{link.name}</span></a>
                        </li>)
                    }
                </ul>
            </nav> */}
        </header>
    );
}