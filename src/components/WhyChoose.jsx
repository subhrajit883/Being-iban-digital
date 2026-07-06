import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import team from "../assets/images/whyChoose.webp";

const features = [
  {
    icon: FaRocket,
    title: "Creative Strategy",
    description:
      "Unique campaigns designed specifically for your business goals.",
  },
  {
    icon: FaChartLine,
    title: "Data Driven",
    description:
      "Every decision is backed by analytics and measurable performance.",
  },
  {
    icon: FaAward,
    title: "Premium Quality",
    description:
      "Beautiful UI, powerful development and excellent user experience.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="experts"
      className="py-28 "
    >
      <div className="max-w-7xl mx-auto lg:px-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <img
              src={team}
              alt=""
              className="rounded-3xl object-cover h-[500px] w-[400px]"
            />

            {/* Floating Experience Card */}

            {/* <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl px-8 py-6"
            >

              <h2 className="text-5xl font-black text-amber-500">
                10+
              </h2>

              <p className="text-gray-600 font-medium">
                Years of Experience
              </p>

            </motion.div> */}

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            {/* <span className="uppercase tracking-[4px] text-amber-500 font-semibold">
              WHY CHOOSE US
            </span> */}

            <h2 className="mt-5 text-3xl font-bold text-gray-900 leading-tight">
              Why Choose Being Iban Digital?
            </h2>

            <div className="mt-7 text-gray-600 leading-8">
              
             <ul className="space-y-4 list-disc">
               <li className="text-lg font-bold ">
                 Affordable pricing designed for startups and growing businesses
               </li>
               <li className="text-lg font-bold ">
                 Creative and performance-driven digital campaigns
               </li>
               <li className="text-lg font-bold">
                 Dedicated support with transparent communication and reporting
               </li>
                   <li className="text-lg font-bold">
                 Customized marketing strategies tailored to your goals
               </li>
                   <li className="text-lg font-bold">
                 Focused on real business growth and quality lead generation
               </li>
             </ul>
            </div>

            {/* Stats */}

          {/*       <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">

                <FaUsers
                  className="text-amber-500 mb-4"
                  size={28}
                />

                <h3 className="text-4xl font-black">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Happy Clients
                </p>

              </div> 

          <div className="bg-white rounded-2xl shadow-lg p-6">

                <FaAward
                  className="text-amber-500 mb-4"
                  size={28}
                />

                <h3 className="text-4xl font-black">
                  1200+
                </h3>

                <p className="text-gray-500 mt-2">
                  Projects Completed
                </p>

              </div> 

            </div>*/}

            {/* Feature Cards */}

            {/* <div className="space-y-5 mt-10">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * .2,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="bg-white rounded-2xl shadow-md p-6 flex gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">

                      <Icon
                        className="text-amber-600"
                        size={24}
                      />

                    </div>

                    <div>

                      <h3 className="font-bold text-xl">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mt-2 leading-7">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div> */}

            {/* CTA */}

            {/* <button
              className="mt-10 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold flex items-center gap-3 transition"
            >
              Let's Work Together

              <FaArrowRight />

            </button> */}

          </motion.div>

        </div>

      </div>
    </section>
  );
}