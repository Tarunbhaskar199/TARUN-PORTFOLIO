import Section from '../components/Section'

export default function Home() {
  return (
    <section className="h-screen px-6 flex items-center justify-center bg-gradient-to-r from-purple-100 via-blue-50 to-pink-100">
  <div className="bg-gradient-to-r from-blue-50 to-pink-100 max-w-4xl w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Text Section */}
    <div className="flex-1 text-center md:text-left">
      <p className="text-blue-600 uppercase font-semibold tracking-wider">Welcome</p>
      <h1 className="text-5xl font-bold text-gray-800 mt-2">
        Hi, I'm <span className="text-purple-600">Tarun Bhaskar</span> 👋
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        BCA Graduate | Aspiring IT/Data Analyst | Python | Excel | Power BI
      </p>

      <div className="mt-6 flex gap-4 justify-center md:justify-start">
        <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View Projects
        </a>
        <a href="/resume" className="px-6 py-3 border border-gray-600 text-gray-800 rounded-lg shadow hover:bg-gray-100 transition">
          Resume
        </a>
      </div>
    </div>

    {/* Right Profile Photo */}
    <div className="w-48 h-56 rounded-full overflow-hidden shadow-lg border-4 border-purple-200">
      <img
        src="/profile.jpeg"
        alt="Tarun Bhaskar"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</section>
  )
}
