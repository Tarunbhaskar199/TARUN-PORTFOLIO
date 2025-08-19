import Section from '../components/Section'

export default function Home() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">Welcome</p>
          <h1 className="text-4xl sm:text-4xl font-extrabold mt-3">Hi, I'm Tarun Bhaskar👋</h1>
          <p className="text-gray-600 mt-4 text-lg">
            BCA Graduate | Aspiring IT/Data Analyst | Python | Excel | Power BI
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="px-5 py-3 rounded-xl bg-primary text-white">View Projects</a>
            <a href="/resume" className="px-5 py-3 rounded-xl border">Resume</a>
          </div>
        </div>
        <div className="justify-self-center">
        <div className="w-60 h-65 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
        <img
    src="profile.jpeg"
    alt="Profile"
    className="object-cover w-full h-full"
  />
</div>
        </div>
      </div>
    </Section>
  )
}
