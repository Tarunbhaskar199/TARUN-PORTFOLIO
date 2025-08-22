import Section from '../components/Section'

export default function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Education
        </h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Degree */}
          <div className="bg-gradient-to-r from-green-50 to-red-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-700">Graduated: 2025</p>
            <p className="text-gray-600">College: Vasavi Jnana Peetha First Grade College</p>
            <p className="text-gray-600">CGPA: 8.54</p>
          </div>

          {/* Add More Education */}
          <div className="bg-gradient-to-r from-green-50 to-red-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Pre-University / 12th
            </h3>
            <p className="text-gray-700">Year: 2022</p>
            <p className="text-gray-600">College: St Pauls PU College</p>
            <p className="text-gray-600">Percentage: 91.16%</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-red-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              SSLC / 10th
            </h3>
            <p className="text-gray-700">Year: 2020</p>
            <p className="text-gray-600">School: Ramanashree English School</p>
            <p className="text-gray-600">Percentage: 63.84%</p>
          </div>
        </div>
      </div>
    </section>
  );
}