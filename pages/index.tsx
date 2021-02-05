import { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Work from '../components/Work';
import { getProjects, Project } from '../lib/projects';
import { getSkills, Skill } from '../lib/skills';

export interface HomeProps {
  skills: Skill[];
  projects: Project[];
}

export default function Home({ skills, projects }: HomeProps ) {
  return (<>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="Description" content="Joost Zöllner, Software Engineer, Frontend Web Development, Hamburg" />
      <title>Joost Zöllner - joost.io</title>
    </Head>
    <Header />
    <Hero />
    <About />
    <Work />
    <Skills skills={skills} />
    <Projects projects={projects}/>
    <Footer />
  </>)
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const skills = getSkills();
  const projects = getProjects();

  return {
    props: {
      skills,
      projects
    }
  }
}
