import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="text-center mb-16"
    >
      <p className="uppercase tracking-[4px] text-amber-500 font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
}