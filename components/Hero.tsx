import { Link } from '../lib/links';
export interface HeroProps {
    links: Link[];
}

export default function Hero({ links }: HeroProps) {
    return <section className="text-center py-16 bg-indigo-600 rounded-b-full text-white shadow">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Joost Zöllner<br />Software Architect / Frontend Developer</h1>
        <img src="/hero.png" width={256} height={256} className="rounded-full mx-auto my-5"></img>
        <ul className="flex items-center justify-center">
            {
                links.map((link, index) => <li key={index} className="mx-2">
                    <a href={link.link} target="_blank" className={`${link.icon} text-3xl`} title={link.name}><span className="sr-only">{link.name}</span></a>
                </li>)
            }
        </ul>
    </section>
}