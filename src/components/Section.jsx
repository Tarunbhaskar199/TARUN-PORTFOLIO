import { motion } from 'framer-motion'

export default function Section({ title, subtitle, children }) {
  return (
    <section className="container-pad py-12 sm:py-16">
      <div className="mb-8">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
