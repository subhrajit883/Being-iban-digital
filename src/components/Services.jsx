import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-stone-100"
    >
      {/* Decorative Blobs */}

      <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-amber-200 blur-[140px] opacity-40" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-300 blur-[170px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
        //   subtitle="OUR SERVICES"
          title="Everything You Need To Grow Digitally"
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-3xl mx-auto text-center text-gray-600 leading-8 mb-16"
        >
          We combine creativity, technology and marketing
          to deliver measurable business growth.
        </motion.p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
}