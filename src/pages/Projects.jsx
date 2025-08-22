import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../projects.data'

export default function Projects() {
  return (
    <Section title="Projects" subtitle="Some things I've built recently.">
      <div className=" bg-gradient-to-r from-blue-50 to-purple-100grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  )
}
