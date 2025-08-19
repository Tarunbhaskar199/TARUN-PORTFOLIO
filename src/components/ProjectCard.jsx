export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <a href={link} target="_blank" className="block border rounded-2xl shadow-soft p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
        ))}
      </div>
    </a>
  )
}
