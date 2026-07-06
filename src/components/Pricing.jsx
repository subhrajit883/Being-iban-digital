import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";
import pricing from "../data/pricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 bg-linear-to-b from-stone-100 via-white to-stone-100 overflow-hidden"
    >
      {/* Background Decoration */}

      <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-amber-200 blur-[180px] opacity-30" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-orange-300 blur-[180px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
        //   subtitle="OUR PRICING"
          title="Choose The Perfect Plan"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-600 leading-8 mb-16"
        >
          Flexible pricing designed for startups,
          growing businesses and enterprises.
          Need something unique? We can create a
          completely custom solution for you.
        </motion.p>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {pricing.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
            delay: .3,
          }}
          className="mt-24 rounded-[40px] bg-linear-to-r from-[#3b2612] to-[#5f3b18] text-white p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
        >

          <div>

            <p className="uppercase tracking-[4px] text-amber-400 font-semibold">
              FREE CONSULTATION
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-black leading-tight">
              Ready To Grow Your Business?
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl leading-8">
              Let's discuss your project and build a
              strategy that helps your business reach
              more customers and increase revenue.
            </p>

          </div>

          <button className="bg-amber-500 hover:bg-amber-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3 whitespace-nowrap">

            Book Free Call

            <FaArrowRight />

          </button>

        </motion.div>

      </div>
    </section>
  );
}