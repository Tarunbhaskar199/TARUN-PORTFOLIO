import Section from '../components/Section'

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex items-center justify-center py-16 px-6">
      <div className="bg-gradient-to-r from-blue-100 to-red-100 max-w-3xl w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
        <p className="text-gray-700 mb-10">
          Feel free to reach out through any of these platforms 🚀
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="mailto:tarunuday512@gmail.com" 
             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-2xl">📧</p>
            <h3 className="font-semibold mt-2">Email</h3>
            <p className="text-blue-600">tarunuday512@gmail.com</p>
          </a>

          <a href="https://github.com/Tarunbhaskar199" target="_blank" 
             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-2xl">💻</p>
            <h3 className="font-semibold mt-2">GitHub</h3>
            <p className="text-blue-600">@Tarunbhaskar199</p>
          </a>

          <a href="https://www.linkedin.com/in/tarun-bhaskar-5ba9a7342/" target="_blank"
             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-2xl">💼</p>
            <h3 className="font-semibold mt-2">LinkedIn</h3>
            <p className="text-blue-600">Tarun Bhaskar</p>
          </a>
        </div>
      </div>
    </section>
  )
}
