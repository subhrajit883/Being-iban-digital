import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({
  service,
  index,
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .5,
        delay: index * .1,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient */}
      <div
        className={`absolute inset-0 opacity-0 transition duration-500 bg-gradient-to-br ${service.color}`}
      />

      {/* Content */}
      <div className="relative p-8">

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color}`}
        >
          <Icon size={28} />
        </div>

        <h3 className="mt-7 text-2xl font-bold transition">
          {service.title}
        </h3>

        <p className="mt-4 text-gray-600  leading-7 transition">
          {service.description}
        </p>

        <ul className="mt-6 space-y-3">

          {service.points.map((point) => (

            <li
              key={point}
              className="flex items-center gap-3 text-gray-700  transition"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 transition" />

              {point}
            </li>

          ))}

        </ul>

        {/* <button
          className="mt-8 flex items-center gap-3 font-semibold text-amber-600  transition"
        >
          Learn More

          <FaArrowRight />
        </button> */}

      </div>
    </motion.div>
  );
}