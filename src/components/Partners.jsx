import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const logos = [
  "partner1.png",
  "partner2.png",
  "partner3.png",
  "partner4.png",
  "partner5.png",
  "partner6.png",
  "partner7.png",
  "partner8.png",
];

export default function Partners() {
  return (
    <section className="py-24 bg-stone-50">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
        //   subtitle="OUR CLIENTS"
          title="Trusted By Leading Brands"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">

          {logos.map((logo, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="bg-white rounded-2xl shadow-md p-8 flex justify-center items-center"
            >

              <img
                src={`/partners/${logo}`}
                className="h-14 object-contain grayscale hover:grayscale-0 transition"
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}