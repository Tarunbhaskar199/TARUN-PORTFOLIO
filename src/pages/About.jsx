export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 pt-24 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Photo */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img src="/skills.png" alt="Profile" className="object-cover w-full h-full" />
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            Motivated BCA graduate seeking an entry-level role in Software Development / Data Analytics where I can apply programming, analytical, and problem-solving skills to contribute to organizational success while enhancing my technical expertise.
          </p>
          <p className="text-gray-600">
            Interests: web development, UI engineering, and data-driven apps.
          </p>
          <p className="text-gray-600">
            Education: BCA • Goal: Software Developer
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/html.png" alt="HTML" className="w-6 h-6 mr-2" /> HTML
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/css.png" alt="CSS" className="w-6 h-6 mr-2" /> CSS
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/js.png" alt="JavaScript" className="w-6 h-6 mr-2" /> JavaScript
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/python.png" alt="Python" className="w-6 h-6 mr-2" /> Python
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/react.png" alt="React" className="w-6 h-6 mr-2" /> React
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/github.png" alt="GitHub" className="w-6 h-6 mr-2" /> Git/GitHub
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/java.png" alt="Java" className="w-6 h-6 mr-2" /> Java
          </li>
          <li className="flex items-center px-3 py-2 rounded-xl bg-gray-100 shadow">
            <img src="/sql.png" alt="SQL" className="w-6 h-6 mr-2" /> SQL
          </li>
        </ul>
      </div>
    </section>
  );
}