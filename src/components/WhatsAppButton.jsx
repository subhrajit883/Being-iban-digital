import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/916292334685"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 text-white shadow-2xl flex items-center justify-center text-4xl z-50"
    >
      <FaWhatsapp />
    </motion.a>
  );
}