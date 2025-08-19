export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-pad py-6 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Tarun. Built with React & Tailwind.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Tarunbhaskar199" className="hover:text-gray-700" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/tarun-bhaskar-5ba9a7342" className="hover:text-gray-700" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
