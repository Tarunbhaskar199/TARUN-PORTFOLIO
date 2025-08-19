import Section from '../components/Section'

export default function Contact() {
  return (
    <Section title ="Contact" subtitle="Let's get in touch.">
      <ul className="space-y-4 text-lg">
        <li><a className="hover:underline" href="mailto: tarunuday512@gmail.com">Email: tarunuday512@gmail.com</a></li>
        <li><a className="hover:underline" href="https://www.linkedin.com/in/tarun-bhaskar-5ba9a7342" target="_blank">LinkedIn: Tarun-Bhaskar</a></li>
        <li><a className="hover:underline" href="https://github.com/Tarunbhaskar199" target="_blank">GitHub: Tarun-Github</a></li>
      </ul>
    </Section>
  )
}
