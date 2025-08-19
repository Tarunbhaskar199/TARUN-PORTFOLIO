import Section from '../components/Section'

export default function Resume() {
  return (
    <Section title="Resume" subtitle="Download my latest CV.">
      <div className="flex items-center gap-4">
        <a
          className="px-5 py-3 rounded-xl bg-primary text-white"
          href="TARUNRESUME.pdf"
          download
        >
          Download Resume
        </a>
        <p className="text-gray-600">Replace <code>publicTARUNRESUME.pdf</code> with your actual CV.</p>
      </div>
      <div className="mt-8 border rounded-2xl overflow-hidden">
        <iframe src="TARUNRESUME.pdf" className="w-full h-[70vh]" title="Resume Preview" />
      </div>
    </Section>
  )
}
